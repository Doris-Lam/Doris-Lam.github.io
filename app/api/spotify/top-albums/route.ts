import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

const LASTFM_API_KEY = process.env.LASTFM_API_KEY
const LASTFM_USERNAME = process.env.LASTFM_USERNAME

async function getTopAlbums() {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=overall&limit=32`
  )

  if (!response.ok) {
    console.error("Last.fm API error:", response.status, response.statusText)
    return { albums: [] }
  }

  const data = await response.json()

  if (!data.topalbums || !data.topalbums.album || data.topalbums.album.length === 0) {
    return { albums: [] }
  }

  type LastFmAlbum = {
    name: string
    artist: { name: string }
    image: Array<{ [key: string]: string }>
    url: string
    playcount: string
  }

  const albums = (data.topalbums.album as LastFmAlbum[]).map((album) => ({
    name: album.name,
    artist: album.artist.name,
    image:
      (album.image?.[3]?.["#text"] as string | undefined) ||
      (album.image?.[2]?.["#text"] as string | undefined) ||
      (album.image?.[1]?.["#text"] as string | undefined) ||
      "",
    url: album.url,
    playcount: album.playcount,
  }))

  return { albums }
}

export async function GET() {
  try {
    const data = await getTopAlbums()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching top albums:", error)
    return NextResponse.json({ albums: [] }, { status: 500 })
  }
}
