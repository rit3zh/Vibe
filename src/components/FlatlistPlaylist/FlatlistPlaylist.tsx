import { View, Text, Image } from "react-native";
import React from "react";
import { FlatListPlaylistStyle as styles } from "./styles";
import { Fonts, useInitialFonts } from "@/utils/hooks";
interface Props {
  _id: string;
  title: string;
  image: string;
  description?: string;
}

export const FlatlistPlaylist: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : undefined;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View style={styles.details}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: fontRegular,
              },
            ]}
          >
            {props.title}
          </Text>

          <Text
            numberOfLines={2}
            style={[
              styles.description,
              {
                fontFamily: fontRegular,
              },
            ]}
          >
            {props.description}
          </Text>
        </View>
      </View>
    </View>
  );
};
