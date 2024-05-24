import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
  container: {},
  contentContainer: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  content: {
    justifyContent: "center",
    flexDirection: "column",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  descriptiveText: {
    color: "gray",
    fontSize: 12,
    marginTop: 1,
  },
});
