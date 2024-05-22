export const ACCESS_SPOTIFY_URI: string =
  `https://open.spotify.com/get_access_token` as const as string;

export const MUSIC_GENRE: string = `https://api-partner.spotify.com/pathfinder/v1/query?operationName=browseAll&variables=%7B%22pagePagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A10%7D%2C%22sectionPagination%22%3A%7B%22offset%22%3A0%2C%22limit%22%3A99%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22cd6fcd0ce9d1849477645646601a6d444597013355467e24066dad2c1dc9b740%22%7D%7D`;

export const TRENDING_BROWSE_ID: string = `FEmusic_new_releases_videos`;
export const BROWSE_URL: string = `https://music.youtube.com/youtubei/v1/browse`;
