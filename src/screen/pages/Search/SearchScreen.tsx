import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { GradientView, GenreList, MusicCarousel } from "@/components/index";
import { SearchStyle as styles } from "@/screen/styles/pages/search-screen/Search";
import { useInitialFonts, Fonts, useThemeContext } from "@/utils/hooks";
import * as Constants from "@/utils/constants/index";

export function SearchScreen() {
  const _id = () => "id" + Math.random().toString(16).slice(2);
  const theme = useThemeContext();
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null;

  return (
    <ScrollView contentInsetAdjustmentBehavior="never">
      <GradientView style={styles.container} theme={theme}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontFamily: font }]}>
            Trending Music Videos
          </Text>
        </View>

        <FlatList
          data={Constants.TRENDING_VIDEOS}
          keyExtractor={(key) => key.id}
          horizontal={true}
          pagingEnabled={true}
          contentContainerStyle={{ marginTop: 10 }}
          renderItem={(props) => <MusicCarousel {...props.item} />}
        />

        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontFamily: font }]}>
            Browse Categories
          </Text>
        </View>

        <FlatList
          data={Constants.SEARCH_SCREEN_GENRE}
          keyExtractor={() => _id()}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.flatlist}
          renderItem={(props) => <GenreList {...props.item} />}
        />
      </GradientView>
    </ScrollView>
  );
}
