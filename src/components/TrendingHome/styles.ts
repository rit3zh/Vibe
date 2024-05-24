import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const TrendingHomeStyles = StyleSheet.create({
  container: {
    width: width - 40,
    height: height / 2,
    backgroundColor: "red",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  contentContainer: {},
  interactionWrapper: {
    alignItems: "center",
  },
  interaction: {
    top: 30,
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
    fontSize: 45,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  trendingTitleContainer: {
    margin: 10,
  },
  titleContainer: {
    marginTop: 20,
  },
  artistContainer: {},
  artist: {
    color: "white",
    fontSize: 25,
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
    height: 160,
    justifyContent: "flex-end",
  },
  button: {
    width: 140,
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
