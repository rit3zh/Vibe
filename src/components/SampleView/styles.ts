import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SampleViewStyle = StyleSheet.create({
  container: {},
  contentContainer: {
    margin: 8,
    width: 120,
    height: 190,

    overflow: "hidden",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 130,
    height: 290,
  },
});
