import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

const LASTFM_API_KEY = process.env.LASTFM_API_KEY
const LASTFM_USERNAME = process.env.LASTFM_USERNAME
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"

async function getSpotifyAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token as string,
    }),
  })

  return response.json()
}

async function getArtistImageFromSpotify(artistName: string, accessToken: string) {
  try {
    const searchResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!searchResponse.ok) {
      return ""
    }

    const searchData = await searchResponse.json()
    const artist = searchData.artists?.items?.[0]
    return artist?.images?.[0]?.url || ""
  } catch (error) {
    console.error(`Error fetching Spotify image for ${artistName}:`, error)
    return ""
  }
}

async function getTopArtists() {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=7day&limit=20`
  )

  if (!response.ok) {
    console.error("Last.fm API error:", response.status, response.statusText)
    return { artists: [] }
  }

  const data = await response.json()

  if (!data.topartists || !data.topartists.artist || data.topartists.artist.length === 0) {
    return { artists: [] }
  }

  // Get Spotify access token
  const { access_token } = await getSpotifyAccessToken()

  // Fetch Spotify images for each artist
  const artistsWithImages = await Promise.all(
    data.topartists.artist.map(async (artist: any) => {
      const spotifyImage = await getArtistImageFromSpotify(artist.name, access_token)
      return {
        name: artist.name,
        image: spotifyImage,
        url: artist.url,
        playcount: artist.playcount,
      }
    })
  )

  return {
    artists: artistsWithImages,
  }
}

export async function GET() {
  try {
    const data = await getTopArtists()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching top artists:", error)
    return NextResponse.json({ artists: [] }, { status: 500 })
  }
}
