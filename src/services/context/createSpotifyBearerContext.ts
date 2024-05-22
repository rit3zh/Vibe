export function createSpotifyBearerContext(accessToken: string) {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}
