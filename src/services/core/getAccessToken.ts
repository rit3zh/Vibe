import type { AccessToken } from "../typings/AccessToken";
import * as API from "../constants/index";
import { Client } from "../api/Client";

export async function getAccessToken(): Promise<AccessToken> {
  const spotifyClientRequest: AccessToken = await Client.get(
    API.ACCESS_SPOTIFY_URI
  );
  return {
    ...spotifyClientRequest,
  };
}
