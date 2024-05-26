import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

export const TrendingHomeStyles = StyleSheet.create({
  container: {
    width: width - 40,
    height: rh(50),
    backgroundColor: "red",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  contentContainer: {},
  interactionWrapper: {
    justifyContent: "center",
  },
  interaction: {
    flex: 1,
    height: rh(30),
    justifyContent: "center",
  },
  detailContainer: {
    position: "absolute",
  },
  trendingText: {
    color: "white",
    fontSize: 40,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  title: {
    fontSize: rf(5.5),
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  trendingTitleContainer: {
    margin: 10,
  },
  titleContainer: {},
  artistContainer: {},
  artist: {
    color: "white",
    fontSize: rf(3),
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  image: {
    width: width - 40,
    height: "100%",
    borderRadius: 4,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "red",
  },
  button: {
    width: rw(35),
    height: 50,
    backgroundColor: "white",
    borderRadius: 7,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
  },
});
