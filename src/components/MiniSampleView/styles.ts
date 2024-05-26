import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const MiniSampleViewStyle = StyleSheet.create({
  container: {},
  contentContainer: {
    margin: 8,
    width: 35,
    height: 49,

    overflow: "hidden",
    borderRadius: 8,
    borderWidth: 3.5,
    borderColor: "#959595",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 35,
    height: 49,
  },
});
