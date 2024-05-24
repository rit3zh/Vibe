import { View, Dimensions, Text, Image, SafeAreaView } from "react-native";
import React, { useRef, useEffect } from "react";
import { MusicShortStyle as styles } from "./styles";
import Video, { VideoRef } from "react-native-video";
import TrackPlayer, {
  Event,
  RepeatMode,
  useProgress,
} from "react-native-track-player";
import { HeaderBackButton } from "@react-navigation/elements";
import { ProgressView } from "@react-native-community/progress-view";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import { MusicControls } from "./MusicControls";

export interface MetaData {
  artists: Artist[];
  album: Album;
  name: string;
}

export interface Artist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Album {
  name: string;
  release_date: string;
  image: string;
}

interface Props {
  canvas?: string;
  url?: string;
  audioUrl?: string;
  index?: number;
  isPlaying: boolean;
  onEnd: () => void;
  info?: MetaData;
  onBackPress: () => any | void;
}

export const MusicShorts: React.FC<Props> = ({
  canvas,
  isPlaying,
  onEnd,
  audioUrl,
  info,
  onBackPress,
}: Props) => {
  const { width, height } = Dimensions.get("window");
  const videoRef = useRef<VideoRef>(null);
  const { position, duration } = useProgress(250);
  const FontLoaded = useInitialFonts();
  const font = {
    fontFamily: FontLoaded ? Fonts.Circular : undefined,
  };
  const subfont = {
    fontFamily: FontLoaded ? Fonts.CircularNormal : undefined,
  };

  useEffect(() => {
    const setupAudio = async () => {
      if (isPlaying) {
        await TrackPlayer.reset();
        await TrackPlayer.add({
          id: "external-audio",
          url: audioUrl,
          title: "External Audio",
          artist: "Artist",
        });
        await TrackPlayer.play();
        videoRef.current?.seek(0);
        videoRef.current?.resume();
        TrackPlayer.setRepeatMode(RepeatMode.Track);
      } else {
        await TrackPlayer.pause();
        videoRef.current?.pause();
      }
    };

    setupAudio();
  }, [isPlaying]);

  const progress = duration > 0 ? position / duration : 0;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 30 }}>
        <Video
          source={{ uri: canvas }}
          ref={videoRef}
          repeat={true}
          playWhenInactive={false}
          style={{
            width: width,
            height: height,
          }}
          paused={!isPlaying}
        />

        <SafeAreaView style={styles.header}>
          <HeaderBackButton
            onPress={onBackPress}
            tintColor="white"
            style={styles.headerBackButton}
          />

          <Text style={[styles.headerTitle, { ...subfont }]}>Explore</Text>
        </SafeAreaView>
      </View>

      <View style={styles.content}>
        <MusicControls />
        <View style={styles.info}>
          <View style={styles.flexColumns}>
            <Image source={{ uri: info.album.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={[styles.name, { ...font }]}>{info.name}</Text>
              <Text style={[styles.subtitle, { ...subfont }]}>
                {info.artists.map((a) => a.name).join(", ")}
              </Text>
            </View>
          </View>
        </View>

        <ProgressView
          progress={progress}
          progressTintColor="white"
          trackTintColor="gray"
        />
      </View>
    </View>
  );
};
