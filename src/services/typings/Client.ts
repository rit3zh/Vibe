export type ClientName = "WEB" | "WEB_REMIX";

export type ClientVersions =
  | "0.1"
  | "2.20210622.10.00"
  | "1.20231004.01.00"
  | "1.20231009.01.00"
  | "2.20211025.07.00";
export type ClientTypeResolver = {
  name: ClientName;
  version: ClientVersions;
  hl?: string;
  gl?: string;
};
export interface Client extends ClientTypeResolver {}
export interface ClientResponse {
  body: {
    context: {
      capabilities?: {};
      client: {
        clientName: string;
        clientVersion: string;
        hl?: string;
        gl?: string;
      };
    };
  };
}
