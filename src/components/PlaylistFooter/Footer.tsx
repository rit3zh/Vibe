import { View, Text, FlatList, ListRenderItem } from "react-native";
import React from "react";
import { FooterStyle as styles } from "./FooterStyles";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import * as Constants from "@/utils/constants/index";
import FastImage from "react-native-fast-image";

interface ItemType extends Constants.Item {
  id: string;
}

interface Props {
  text: string;
}
export const Footer: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;

  const renderItem: ListRenderItem<ItemType> = ({ item }) => (
    <View>
      <View style={styles.contentContainer}>
        <FastImage source={{ uri: item.images[0].url }} style={styles.image} />
        <View style={styles.details}>
          <Text style={[styles.name, { fontFamily: font }]}>{item.name}</Text>
          <Text
            numberOfLines={2}
            style={[styles.description, { fontFamily: fontRegular }]}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );

  const FooterContent = Constants.PLAY_LIST_FOOTER as Constants.PlaylistFooter;
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text
          style={[
            styles.heading,
            {
              fontFamily: font,
            },
          ]}
        >
          {props.text}
        </Text>
      </View>

      <FlatList
        numColumns={3}
        data={FooterContent.content.items}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={renderItem}
      />
    </View>
  );
};
