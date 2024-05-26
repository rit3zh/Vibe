import { StyleSheet, Dimensions } from "react-native";

export const ListTitleStyle = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  descriptive: {
    color: "gray",
    fontSize: 13,
    top: 3,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  content: {
    justifyContent: "center",
    marginLeft: 4,
  },
  titleContainer: {
    flexDirection: "row",
  },
  chevron: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
