export interface PlaylistFooter {
  content: Content;
  custom_fields: CustomFields;
  external_urls: any;
  href: string;
  id: string;
  images: any[];
  name: any;
  rendering: string;
  tag_line: any;
  type: string;
}

interface Content {
  href: string;
  items: Item[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

export interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: any;
  public: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Image {
  height: any;
  url: string;
  width: any;
}

interface Owner {
  display_name: string;
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface ExternalUrls2 {
  spotify: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface CustomFields {}
