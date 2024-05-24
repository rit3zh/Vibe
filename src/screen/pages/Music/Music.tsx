import { View, Text, FlatList, Image } from "react-native";
import React, { useRef, useState } from "react";
import {
  GradientView,
  PlayerProgressBar,
  VolumeProgressBar,
} from "@/components/index";
import * as Constants from "@/utils/constants/index";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import {
  SkipToNextButton,
  SkipToPreviousButton,
  PlayPauseButton,
} from "@/components/PlayerControls/PlayerControls";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { MusicStyle as styles } from "@/screen/styles/pages/music-screen/Music";
export function Music() {
  const [index, setIndex] = useState<number>(0);
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null;
  const ref = useRef<FlatList>();
  return (
    <GradientView style={styles.container} theme="dark">
      <View style={styles.contentContainer}>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
        </View>
        <FlatList
          ref={ref}
          data={Constants.TRACKS}
          keyExtractor={(key) => key.id}
          pagingEnabled
          horizontal
          renderItem={({ item }) => (
            <View style={styles.imageView}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          )}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.columnsContainer}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: font,
                },
              ]}
            >
              {Constants.TRACKS[index].title}
            </Text>
            <Text style={[styles.artist, { fontFamily: font }]}>
              {Constants.TRACKS[index].album}
            </Text>
          </View>
          <View style={styles.interactionWrapper}>
            <View style={styles.interaction}>
              <Ionicons name="star-outline" color={"white"} size={15} />
            </View>

            <View
              style={[
                styles.interaction,
                {
                  right: 5,
                },
              ]}
            >
              <Ionicons name="ellipsis-horizontal" color={"white"} size={15} />
            </View>
          </View>
        </View>
      </View>
      <PlayerProgressBar />
      <View style={styles.bottomAlignMent}>
        <View style={styles.musicControls}>
          <SkipToPreviousButton
            onPress={() => {
              ref.current.scrollToIndex({
                index: index - 1,
              });
              setIndex(index - 1);
            }}
          />
          <PlayPauseButton />
          <SkipToNextButton
            onPress={() => {
              ref.current.scrollToIndex({
                index: index + 1,
              });
              setIndex(index + 1);
            }}
          />
        </View>
      </View>
      <VolumeProgressBar />

      <View style={styles.bottomContent}>
        <MaterialIcons name="lyrics" size={24} color="#a3a3a3" />
        <Ionicons name="share-outline" size={24} color="#a3a3a3" />
        <Ionicons name="list" size={24} color="#a3a3a3" />
      </View>
    </GradientView>
  );
}
