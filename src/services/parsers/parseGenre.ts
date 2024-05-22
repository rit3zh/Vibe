import { GenreRoot } from "../@types";

interface IGenres {
  title: string;
  artwork: string;
  hex?: string;
  sectionId?: string;
}

export function parseGenre(rootObject: GenreRoot) {
  const { data } = rootObject;

  const sections = data.browseStart?.sections?.items[0];
  const items = sections?.sectionItems?.items;

  const genres: IGenres[] = [];
  for (const item of items) {
    const content = item?.content;
    const response = content?.data?.data?.cardRepresentation;

    const title = response?.title?.transformedLabel as string;
    const artwork = response?.artwork?.sources?.at(-1)?.url;
    const hex = response?.backgroundColor?.hex;
    genres.push({
      artwork,
      title,
      hex,
    });
  }
  return genres;
}
