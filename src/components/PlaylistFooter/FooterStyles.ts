import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const FooterStyle = StyleSheet.create({
  container: {},
  headingContainer: {
    margin: 5,
    marginTop: 15,
  },
  heading: {
    color: "white",
    fontSize: 20,
  },
  contentContainer: {
    marginLeft: 20,
    marginTop: 20,
    right: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  name: {
    color: "white",
  },
  description: {
    color: "gray",
    maxWidth: 110,
    fontSize: 12,
  },
  details: {
    marginTop: 10,
  },
});
