import { CanvasRoot } from "../@types";

export function parseCanvas(rootBody: CanvasRoot) {
  const { data } = rootBody;
  const url = data?.trackUnion?.canvas?.url;
  return url;
}
