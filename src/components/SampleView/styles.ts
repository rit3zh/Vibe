import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SampleViewStyle = StyleSheet.create({
  container: {},
  contentContainer: {
    width: 120,
    height: 190,
    margin: 8,

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
