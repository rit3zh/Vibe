import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const MusicCarouselStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    width: width,

    alignItems: "center",
  },
  interactionWrapper: {
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 5,
  },
  title: {
    color: "white",
    fontSize: 15,
    maxWidth: width - 50,
  },
  subtitle: {
    color: "gray",
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
  },
});
