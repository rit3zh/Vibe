import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

export const MusicStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    top: responsiveHeight(10),
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: "#767676",
    fontSize: responsiveFontSize(1.6),
  },
  imageView: {
    width: width,
    height: 300,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 9,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: responsiveHeight(5),
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
    marginTop: 4,
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
    top: responsiveHeight(1),
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
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(3),
  },
});
