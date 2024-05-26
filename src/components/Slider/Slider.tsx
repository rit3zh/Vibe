import { StyleSheet, Text, View, ViewProps } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import TrackPlayer, { useProgress } from "react-native-track-player";

export const PlayerProgressBar = ({ style }: ViewProps) => {
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
            marginTop: responsiveHeight(14),
          }}
        >
          <Slider
            progress={progress}
            minimumValue={min}
            maximumValue={max}
            containerStyle={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
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
            style={{ width: responsiveWidth(90) }}
            onSlidingComplete={async (value) => {
              // if the user is not sliding, we should not update the position
              // if (!isSliding.value) return;
              // isSliding.value = false;
              // await TrackPlayer.seekTo(value * duration);
            }}
          />
        </View>

        <View style={styles.timeRow}>
          <Text style={[styles.timeText, { marginLeft: 20 }]}>{"0:45"}</Text>

          <Text style={[styles.timeText, { marginRight: 20 }]}>
            {"-"} {"2:34"}
          </Text>
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
