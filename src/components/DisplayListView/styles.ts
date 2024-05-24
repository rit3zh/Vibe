import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const DisplayListViewStyles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    width: width - 40,
    height: 60,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
    borderTopWidth: 1,
    borderTopColor: "#242424",
    borderRightWidth: 1,
    borderRightColor: "#0c0c0c",
    borderLeftWidth: 1,
    borderLeftColor: "#0c0c0c",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 14,

    color: "white",
  },
  artists: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },
});
