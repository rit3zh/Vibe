import { Client } from "../typings/Client";
import { createSpotifyBearerContext as makeSpotifyBearerContext } from "./createSpotifyBearerContext";
import { makeYouTubeContextStructure } from "./createYoutubeContext";
namespace Context {
  export function createInitialSpotifyContextStructure(accessToken: string) {
    return makeSpotifyBearerContext(accessToken);
  }

  export function createInitialYoutubeContextStructure(context?: Client) {
    return makeYouTubeContextStructure(context);
  }
}

export default Context;
