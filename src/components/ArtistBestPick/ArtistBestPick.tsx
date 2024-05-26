import { View, Text } from "react-native";
import React from "react";
import { ArtistBestPickStyles as styles } from "./Styles";
import FastImage from "react-native-fast-image";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name?: string;
  total?: number;
  image?: string;
  onIconPress?: () => any;
}

export const ArtistBestPick: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: props.image,
        }}
        style={styles.image}
      />

      <View style={styles.detailContainer}>
        <Text
          style={[
            styles.artistPick_sText,
            {
              fontFamily: fontRegular,
            },
          ]}
        >
          Artist's Pick
        </Text>

        <Text
          style={[
            styles.name,
            {
              fontFamily: fontRegular,
            },
          ]}
        >
          {props.name}
        </Text>

        <Text
          style={[
            styles.total,
            {
              fontFamily: fontRegular,
            },
          ]}
        >
          {props.total} Songs
        </Text>

        <View style={styles.iconContainer}>
          <Ionicons size={15} color={"#fff"} name="albums" />
        </View>
      </View>

      <View style={styles.chervonContainer}>
        <Ionicons name="chevron-forward" color={"gray"} size={30} />
      </View>
    </View>
  );
};
