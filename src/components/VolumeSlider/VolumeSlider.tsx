import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import TrackPlayer, { useProgress } from "react-native-track-player";

export const VolumeProgressBar = ({ style }: ViewProps) => {
  const { duration, position } = useProgress(250);

  const isSliding = useSharedValue(false);
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  const trackElapsedTime = formatSecondsToMinutes(120);
  const trackRemainingTime = formatSecondsToMinutes(120 - 0.5);

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  return (
    <GestureHandlerRootView>
      <View style={style}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="volume-low"
            color={"#808080"}
            size={18}
            style={{ marginLeft: 20 }}
          />
          <Slider
            progress={progress}
            minimumValue={min}
            maximumValue={max}
            containerStyle={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 300,
            }}
            thumbWidth={0}
            renderBubble={() => null}
            theme={{
              minimumTrackTintColor: "#fff",
              maximumTrackTintColor: "#4f4f4f",
            }}
            onSlidingStart={() => (isSliding.value = true)}
            onValueChange={async (value) => {
              await TrackPlayer.seekTo(value * duration);
            }}
            onSlidingComplete={async (value) => {
              // if the user is not sliding, we should not update the position
              // if (!isSliding.value) return;
              // isSliding.value = false;
              // await TrackPlayer.seekTo(value * duration);
            }}
          />
          <Ionicons
            name="volume-high"
            color={"#808080"}
            size={18}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 20,
  },
  timeText: {
    color: "white",
    opacity: 0.75,
    fontSize: 12,
    letterSpacing: 0.7,
    fontWeight: "500",
  },
});

const formatSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};
