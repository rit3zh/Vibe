import { TrendingRoot } from "../@types";

interface ITrending {
  title?: string;
  id?: string;
  image?: string;
  duration?: string;
}

export function parseTrending(rootObject: TrendingRoot) {
  const trending: ITrending[] = [];
  const { contents } = rootObject;
  const content =
    contents?.singleColumnBrowseResultsRenderer?.tabs[0]?.tabRenderer?.content;
  const sectionList =
    content?.sectionListRenderer?.contents[0].gridRenderer?.items;

  for (const item of sectionList) {
    const data = item?.musicTwoRowItemRenderer;
    const title = data.title.runs?.at(-1)?.text;
    const id = data?.navigationEndpoint?.watchEndpoint?.videoId;
    const image =
      data?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails?.at(
        -1
      )?.url;
    const duration = data.subtitle.runs.find((obj) =>
      obj.text.includes("views")
    )?.text;
    trending.push({
      duration,
      id,
      image,
      title,
    });
  }
  return trending;
}
