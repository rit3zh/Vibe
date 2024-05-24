import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const LibraryStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width - 25,
    backgroundColor: "transparent",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "white",
    marginLeft: 8,
    maxWidth: 280,
    fontWeight: "400",
    fontSize: 20,
  },
  nameContainer: { marginLeft: 10 },
  chevronView: {},
});
