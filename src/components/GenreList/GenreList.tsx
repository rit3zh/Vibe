import { View, Text, Image } from "react-native";
import React from "react";
import { GenreStyle as styles } from "./style";
import { Fonts, useInitialFonts } from "@/utils/hooks";

interface Props {
  title?: string;
  hex?: string;
  artwork?: string;
}

export const GenreList: React.FC<Props> = ({
  title,
  artwork,
  hex,
}: Props): React.ReactNode => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null || undefined;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.contentContainer,
          {
            backgroundColor: hex,
          },
        ]}
      >
        <View style={styles.titleWrapperContainer}>
          <Text style={[styles.title, { fontFamily: font }]}>{title}</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: artwork }} style={styles.image} />
          </View>
        </View>
      </View>
    </View>
  );
};
