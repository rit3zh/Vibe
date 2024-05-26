import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArtistStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    top: 5,
  },
  title: {
    fontSize: 25,
    color: "white",
  },
});
