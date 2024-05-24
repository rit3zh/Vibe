import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FloatingPlayerStyle as styles } from "./FloatingPlayerStyle";
import * as Constants from "@/utils/constants/index";
import { MovingText } from "../MovingText/MovingText";
import {
  PlayPauseButton,
  SkipToNextButton,
} from "../PlayerControls/PlayerControls";

interface Props {
  onPress: () => any | void;
}

export const FloatingPlayer: React.FC<Props> = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, {}]}
    >
      <>
        <Image
          source={{
            uri: Constants.SEARCH_TRACKS[0].image,
          }}
          style={styles.trackArtworkImage}
        />

        <View style={styles.trackTitleContainer}>
          <View style={{ flexDirection: "column" }}>
            <MovingText
              style={styles.trackTitle}
              text={Constants.SEARCH_TRACKS[0].name ?? ""}
              animationThreshold={25}
            />
            <View
              style={{
                marginLeft: 10,
                top: 2,
              }}
            >
              <MovingText
                style={styles.trackDetails}
                text={
                  Constants.SEARCH_TRACKS[0].artists.map((a) => a).join(", ") ??
                  ""
                }
                animationThreshold={25}
              />
            </View>
          </View>
        </View>

        <View style={styles.trackControlsContainer}>
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={22} />
        </View>
      </>
    </TouchableOpacity>
  );
};
