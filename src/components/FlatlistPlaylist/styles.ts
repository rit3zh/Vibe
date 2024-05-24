import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
export const FlatListPlaylistStyle = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  contentContainer: {
    marginRight: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#030303",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  description: {
    fontSize: 12,
    color: "#747474",
    maxWidth: 150,
  },
  details: {
    top: 5,
  },
  title: {
    fontSize: 14,
    color: "white",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 3,
  },
});
