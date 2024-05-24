import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const RecentAddedStyle = StyleSheet.create({
  container: {
    top: 10,
    padding: 8,
  },
  detailsContainer: {
    top: 4,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    maxWidth: 185,
  },
  subtitle: {
    color: "#636363",
    fontSize: 15,
  },
  contentContainer: {},
  imageContainer: {},
  image: {
    width: 180,
    height: 180,
    borderRadius: 8,
  },
});
