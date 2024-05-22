export function formatSpotifyURI(initialURI: string) {
  const parts: string[] = initialURI.split(":");

  const id: string = parts[parts.length - 1];
  return id;
}
