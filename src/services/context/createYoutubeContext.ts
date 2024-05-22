import { Client, ClientResponse } from "../typings/Client";

export function makeYouTubeContextStructure(context: Client): ClientResponse {
  const { ...props } = context;

  return {
    body: {
      context: {
        capabilities: {},
        client: {
          clientName: props.name,
          clientVersion: props.version,
          hl: props.hl || "en",
          gl: props.gl || "US",
        },
      },
    },
  };
}
