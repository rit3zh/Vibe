import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArtistBestPickStyles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 20,

    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 0.6,
    borderColor: "#1c1c1c",
  },
  detailContainer: {
    flexDirection: "column",

    marginLeft: 10,
  },
  artistPick_sText: {
    color: "#898989",
  },
  name: {
    color: "white",
    fontSize: 15.7,
  },
  chervonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20,
  },
  total: {
    color: "#898989",
    fontSize: 13,
  },
  iconContainer: {
    width: 25,
    height: 25,
    backgroundColor: "#333333",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
});
