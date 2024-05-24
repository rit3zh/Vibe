import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import {
  GradientView,
  GenreList,
  MusicCarousel,
  SampleView,
  MusicSearchList,
  Fade,
  AnimatedSegmentControl,
  AnimatedFlatList,
} from "@/components/index";
import { SearchStyle as styles } from "@/screen/styles/pages/search-screen/Search";
import { useInitialFonts, Fonts, useThemeContext } from "@/utils/hooks";
import * as Constants from "@/utils/constants/index";
import Animated, { FadeIn } from "react-native-reanimated";

export function SearchScreen(props: NativeStackHeaderProps) {
  const _id = () => "id" + Math.random().toString(16).slice(2);
  const theme = useThemeContext();
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null;

  // States
  const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [fadeOutComplete, setFadeOutComplete] = useState<boolean>(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search Artists, Songs, Playlists and more!",
        tintColor: "white",
        textColor: "white",
        onFocus: () => {
          setSearchBarFocused(true);
          setFadeOutComplete(false);
        },
        onBlur: () => {
          setSearchBarFocused(false);
          setHidden(false);
        },
        autoFocus: false,
      },
    });
  }, [props.navigation]);

  const handleAnimationComplete = () => {
    if (searchBarFocused) {
      setFadeOutComplete(true);
    } else {
      setFadeOutComplete(false);
    }
  };

  const onPress = () => props.navigation.navigate("SampleScreen");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{}}
      contentInsetAdjustmentBehavior="always"
    >
      <GradientView style={{}} theme={theme}>
        {/* <Fade
            visible={!searchBarFocused}
            onAnimationComplete={handleAnimationComplete}
          > */}
        {/* <Animated.View entering={FadeIn.delay(1000)}> */}

        {searchBarFocused ? (
          <React.Fragment>
            <AnimatedSegmentControl
              selectedIndex={0}
              values={["Vibe", "Library"]}
            />

            <View
              style={{
                top: 20,
                marginLeft: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500", fontSize: 15 }}>
                Recently Searches
              </Text>
              <Text style={{ color: "white", marginRight: 20 }}>Clear</Text>
            </View>

            <FlatList
              data={Constants.SEARCH_TRACKS}
              keyExtractor={() => _id()}
              scrollEnabled={false}
              contentContainerStyle={{ backgroundColor: "transparent" }}
              renderItem={(data) => (
                <MusicSearchList
                  track={data.item}
                  length={Constants.SEARCH_TRACKS.length}
                  index={data.index}
                />
              )}
            />
          </React.Fragment>
        ) : (
          <>
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
                Explore More
              </Text>
            </View>

            <FlatList
              data={Constants.EXPLORE_MORE_SAMPLE}
              keyExtractor={(key) => key._id}
              horizontal={true}
              contentContainerStyle={styles.exploreMore}
              renderItem={(props) => (
                <SampleView onPress={onPress} {...props.item} />
              )}
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
          </>
        )}

        {/* </Animated.View> */}
        {/* </Fade> */}
      </GradientView>
    </ScrollView>
  );
}
