import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const HeaderNavBarStyle = StyleSheet.create({
  container: {
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backContainer: {
    marginLeft: 10,
  },
  ellipsisContainer: {
    marginRight: 20,
  },
});
