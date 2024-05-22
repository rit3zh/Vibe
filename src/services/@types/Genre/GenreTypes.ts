export interface GenreRoot {
  data: Data;
  extensions: Extensions;
}

interface Data {
  browseStart: BrowseStart;
}

interface BrowseStart {
  __typename: string;
  sections: Sections;
  uri: string;
}

interface Sections {
  items: Item[];
}

interface Item {
  data: Data2;
  sectionItems: SectionItems;
  uri: string;
}

interface Data2 {
  __typename: string;
  title: Title;
}

interface Title {
  transformedLabel: string;
}

interface SectionItems {
  items: Item2[];
}

interface Item2 {
  content: Content;
  uri: string;
}

interface Content {
  __typename: string;
  data: Data3;
}

interface Data3 {
  __typename: string;
  data?: Data4;
  artwork?: Artwork2;
  backgroundColor?: BackgroundColor2;
  featureUri?: string;
  iconOverlay?: IconOverlay;
  title?: Title3;
}

interface Data4 {
  cardRepresentation: CardRepresentation;
}

interface CardRepresentation {
  artwork: Artwork;
  backgroundColor: BackgroundColor;
  title: Title2;
}

interface Artwork {
  sources: Source[];
}

interface Source {
  height: number;
  url: string;
  width: number;
}

interface BackgroundColor {
  hex: string;
}

interface Title2 {
  transformedLabel: string;
}

interface Artwork2 {
  sources: Source2[];
}

interface Source2 {
  height: number;
  url: string;
  width: number;
}

interface BackgroundColor2 {
  hex: string;
}

interface IconOverlay {
  sources: Source3[];
}

interface Source3 {
  height: number;
  url: string;
  width: number;
}

interface Title3 {
  transformedLabel: string;
}

interface Extensions {}
