export interface CanvasRoot {
  data: Data;
  extensions: Extensions;
}

interface Data {
  trackUnion: TrackUnion;
}

interface TrackUnion {
  __typename: string;
  canvas: Canvas;
  uri: string;
}

interface Canvas {
  fileId: string;
  type: string;
  uri: string;
  url: string;
}

interface Extensions {}
