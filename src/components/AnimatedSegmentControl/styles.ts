import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const AnimatedSegmentStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeFont: {
    color: "white",
  },
  font: {
    color: "#929292",
  },
  segmentControl: {
    width: width - 40,
    height: 30,
  },
});
