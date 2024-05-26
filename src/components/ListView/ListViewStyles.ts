import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const ListViewStyle = StyleSheet.create({
  container: {
    flexDirection: "row",

    width: Dimensions.get("window").width,

    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  ellipsisContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});
