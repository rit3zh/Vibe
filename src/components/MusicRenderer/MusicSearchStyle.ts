import { Dimensions, StyleSheet } from "react-native";

export const MusicSearchStyle = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: "red",
    width: Dimensions.get("window").width,
    height: 70,
    borderTopWidth: 1,
    alignItems: "center",
    borderTopColor: "#222222",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  ellipsisContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 50,
  },
});
