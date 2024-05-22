import { getHeaders, getRandomizeChoice } from "../utils";

export class Client {
  public static async get(url: string, body?: any) {
    const request = await fetch(url, {
      headers: {
        ...(body as any),

        "User-Agent": getHeaders({ mobile: getRandomizeChoice() }),
      },
    });

    const response = await request.json();
    return response;
  }

  public static async post(url: string, body?: any) {
    const request = await fetch(url, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "User-Agent": getHeaders({ mobile: getRandomizeChoice() }),
        origin: `https://music.youtube.com`,
      },
    });
    const response: any = await request.json();
    return response as any;
  }
}
