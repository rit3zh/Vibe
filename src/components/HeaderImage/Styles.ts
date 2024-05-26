import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const HeaderImageStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerComponentView: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },

  title: {
    color: "white",
    fontSize: 45,

    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    maxWidth: 330,
  },
  headerImage: {
    width: width,
    height: 400,
  },
  contentContainer: {
    height: 400,
    width,
    marginLeft: 10,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playContainer: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 99,
    marginRight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  interaction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  icon: {
    marginLeft: 3,
  },
});
