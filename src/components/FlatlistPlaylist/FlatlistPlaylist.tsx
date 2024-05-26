import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import { FlatListPlaylistStyle as styles } from "./styles";
import { Fonts, useInitialFonts } from "@/utils/hooks";
interface Props {
  _id: string;
  title: string;
  image: string;
  description?: string;
  onPress?: (id: string) => any | void;
}

export const FlatlistPlaylist: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : undefined;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => props.onPress(props._id)}>
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
      </TouchableHighlight>
    </View>
  );
};
