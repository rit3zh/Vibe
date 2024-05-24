import { getAccessToken } from "../core/getAccessToken";
import {
  MUSIC_GENRE,
  TRENDING_BROWSE_ID,
  BROWSE_URL,
  GET_CANVAS,
} from "../constants/index";
import { Client } from "./Client";
import Context from "../context";
import { parseCanvas, parseGenre, parseTrending } from "../parsers";

export const getGenre = async () => {
  const { accessToken } = await getAccessToken();
  const context = Context.createInitialSpotifyContextStructure(accessToken);
  const request = await Client.get(MUSIC_GENRE, {
    ...context,
  });
  const data = request;
  const response = parseGenre(data);
  return response;
};

export const getTrendingMusicVideos = async () => {
  const { body } = Context.createInitialYoutubeContextStructure({
    name: "WEB_REMIX",
    version: "0.1",
    gl: "US",
    hl: "en",
  });

  const request = await Client.post(BROWSE_URL, {
    browseId: TRENDING_BROWSE_ID,
    ...body,
  });

  const data = request;
  const response = parseTrending(data);
  return response.filter(
    (value) => value?.id !== undefined && value?.duration !== undefined
  );
};

/**
 *
 * @param ids max 5
 */
const getTracksCanvas = async (ids?: string[]) => {
  const { accessToken } = await getAccessToken();
  const context = Context.createInitialSpotifyContextStructure(accessToken);
  const canvas: string[] = [];
  for (const id of ids) {
    const URL: string = GET_CANVAS(id);
    const request = await Client.get(URL, {
      ...context,
    });
    const data = request;
    const url = parseCanvas(data);
    canvas.push(url);
  }
  return canvas;
};
