import { StyleSheet, Dimensions } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

export const MusicShortStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    flexDirection: "row",

    width: responsiveWidth(60),
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
  headerBackButton: {
    marginLeft: 10,
  },
  content: {
    position: "absolute",
    width: width - 40,
    height: 10,
    bottom: 50,
  },
  info: {
    position: "absolute",
    width: width - 40,
    height: 10,
    bottom: 70,
  },
  flexColumns: {
    flexDirection: "row",
  },
  details: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    color: "white",
    fontSize: 22,
  },
  subtitle: {
    color: "#b3b3b3",
    fontSize: 12,

    bottom: 3,
  },
  image: {
    width: 55,
    borderRadius: 4,
    height: 55,
  },
});
