import { View, Text, TouchableHighlight } from "react-native";
import React, { useRef } from "react";
import Video, { VideoRef } from "react-native-video";
import { SampleViewStyle as styles } from "./styles";
interface Props {
  canvas?: string;
  url?: string;
  onPress?: () => any;
}
export const SampleView: React.FC<Props> = ({
  canvas,
  url,
  onPress,
}: Props): React.ReactNode => {
  const videoRef = useRef<VideoRef>(null);

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Video
            style={styles.video}
            ref={videoRef}
            playInBackground={true}
            playWhenInactive={true}
            repeat={true}
            source={{ uri: canvas }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};
