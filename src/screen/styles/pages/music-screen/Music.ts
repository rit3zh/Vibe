import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const MusicStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    top: 40,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: "#767676",
    fontSize: 14,
  },
  imageView: {
    width: width,
    height: height / 2,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 9,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnsContainer: {
    justifyContent: "center",

    marginLeft: 30,
  },
  interactionWrapper: {
    flexDirection: "row",
  },
  bottomAlignMent: {
    top: 10,
  },
  indicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    backgroundColor: "#8c8c8c",
    width: 40,
    height: 5,
    borderRadius: 100,
  },
  musicControls: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  interaction: {
    borderRadius: 9999,
    backgroundColor: "#4c4c4c",
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  bottomContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    bottom: 10,
  },
});
