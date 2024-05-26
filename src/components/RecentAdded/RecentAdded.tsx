import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RecentAddedStyle as styles } from "./styles";
interface Props {
  preview_url: string;
  available_markets: string[];
  explicit: boolean;
  type: string;
  episode: boolean;
  track: boolean;
  album: Album;
  artists: Artist2[];
  disc_number: number;
  track_number: number;
  duration_ms: number;
  external_ids: ExternalIds;
  external_urls: ExternalUrls4;
  href: string;
  id: string;
  name: string;
  popularity: number;
  uri: string;
  is_local: boolean;
  index?: number;
  length?: number;

  onPress?: () => any;
}

interface Album {
  available_markets: string[];
  type: string;
  album_type: string;
  href: string;
  id: string;
  images: Image_[];
  name: string;
  release_date: string;
  release_date_precision: string;
  uri: string;
  artists: Artist[];
  external_urls: ExternalUrls2;
  total_tracks: number;
}

interface Image_ {
  url: string;
  width: number;
  height: number;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface ExternalUrls2 {
  spotify: string;
}

interface Artist2 {
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls3 {
  spotify: string;
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls4 {
  spotify: string;
}

export const RecentAdded: React.FC<Props> = ({
  ...props
}: Props): React.ReactNode => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: props.album.images[0]?.url }}
            style={styles.image}
          />

          <View
            style={[
              styles.detailsContainer,
              {
                marginBottom: props.index === props.length - 1 ? 25 : 0,
              },
            ]}
          >
            <Text numberOfLines={1} style={styles.title}>
              {props.name}
            </Text>
            <Text style={styles.subtitle}>
              {props.artists.map((a) => a.name).join(", ")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
