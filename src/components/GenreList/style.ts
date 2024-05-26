import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const { width } = Dimensions.get("window");

export const GenreStyle = StyleSheet.create({
  container: {
    margin: 5,
  },
  contentContainer: {
    width: responsiveWidth(47),
    height: 110,

    borderRadius: 5,

    overflow: "hidden",
  },
  titleWrapperContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 8,
    marginLeft: 8,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  wrapper: {
    width: 190,
    height: 110,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  imageContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    left: 20,
  },
  image: {
    width: 80,
    height: 80,
    transform: [{ rotate: "25deg" }],
  },
});
