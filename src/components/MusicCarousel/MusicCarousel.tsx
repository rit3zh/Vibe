import { View, Text, Image } from "react-native";
import React from "react";
import { MusicCarouselStyle as styles } from "./styles";
import { Fonts, useInitialFonts } from "@/utils/hooks";
interface Props {
  id?: string;
  title?: string;
  image?: string;
  duration?: string;
}

export const MusicCarousel: React.FC<Props> = ({
  image,
  title,
  duration,
}: Props): React.ReactNode => {
  const FontLoaded = useInitialFonts();
  const font = {
    fontFamily: FontLoaded ? Fonts.CircularNormal : null,
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: `${image}"` }} style={styles.image} />
      </View>

      <View style={styles.interactionWrapper}>
        <Text style={[styles.title, { ...font }]} numberOfLines={1}>
          {title}
        </Text>
        <Text
          style={[
            styles.subtitle,
            {
              ...font,
            },
          ]}
        >
          {duration}
        </Text>
      </View>
    </View>
  );
};
