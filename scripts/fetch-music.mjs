import { writeFile, mkdir } from "node:fs/promises"
import { existsSync } from "node:fs"

const {
  LASTFM_API_KEY,
  LASTFM_USERNAME,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env

const OUT_DIR = new URL("../public/music/", import.meta.url)

async function getSpotifyAccessToken() {
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  })
  const data = await response.json()
  return data.access_token
}

async function getArtistImageFromSpotify(artistName, accessToken) {
  const searchResponse = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )
  if (!searchResponse.ok) return ""
  const searchData = await searchResponse.json()
  return searchData.artists?.items?.[0]?.images?.[0]?.url || ""
}

async function getTopArtists() {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=7day&limit=20`
  )
  if (!response.ok) throw new Error(`Last.fm top artists: ${response.status} ${response.statusText}`)
  const data = await response.json()
  const artists = data.topartists?.artist ?? []
  if (artists.length === 0) return { artists: [] }

  const accessToken = await getSpotifyAccessToken()
  const artistsWithImages = await Promise.all(
    artists.map(async (artist) => ({
      name: artist.name,
      image: await getArtistImageFromSpotify(artist.name, accessToken),
      url: artist.url,
      playcount: artist.playcount,
    }))
  )
  return { artists: artistsWithImages }
}

async function getTopAlbums() {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=overall&limit=32`
  )
  if (!response.ok) throw new Error(`Last.fm top albums: ${response.status} ${response.statusText}`)
  const data = await response.json()
  const raw = data.topalbums?.album ?? []
  const albums = raw.map((album) => ({
    name: album.name,
    artist: album.artist.name,
    image:
      album.image?.[3]?.["#text"] ||
      album.image?.[2]?.["#text"] ||
      album.image?.[1]?.["#text"] ||
      "",
    url: album.url,
    playcount: album.playcount,
  }))
  return { albums }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    console.warn("[fetch-music] Last.fm env vars missing — writing empty data (expected in local dev).")
    await writeEmptyIfMissing()
    return
  }

  await Promise.all([
    generate("top-artists.json", getTopArtists, { artists: [] }),
    generate("top-albums.json", getTopAlbums, { albums: [] }),
  ])
}

// Fetch and write one file. On failure, keep any existing file rather than
// blanking the page; only fall back to empty when nothing exists yet.
async function generate(filename, fetcher, empty) {
  const dest = new URL(filename, OUT_DIR)
  try {
    const data = await fetcher()
    await writeFile(dest, JSON.stringify(data, null, 2))
    console.log(`[fetch-music] wrote ${filename}`)
  } catch (error) {
    console.error(`[fetch-music] ${filename} failed:`, error.message)
    if (!existsSync(dest)) {
      await writeFile(dest, JSON.stringify(empty, null, 2))
      console.warn(`[fetch-music] wrote empty ${filename} as fallback`)
    }
  }
}

async function writeEmptyIfMissing() {
  const artists = new URL("top-artists.json", OUT_DIR)
  const albums = new URL("top-albums.json", OUT_DIR)
  if (!existsSync(artists)) await writeFile(artists, JSON.stringify({ artists: [] }, null, 2))
  if (!existsSync(albums)) await writeFile(albums, JSON.stringify({ albums: [] }, null, 2))
}

main()
