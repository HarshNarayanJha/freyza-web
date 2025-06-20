export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality: number
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""
  const cleanSrc = src.startsWith("/") ? src.substring(1) : src

  const finalUrl = `${baseUrl}/${cleanSrc}?w=${width}&q=${quality || 75}`
  return finalUrl
}
