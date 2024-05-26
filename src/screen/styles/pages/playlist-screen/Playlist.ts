import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const PlaylistStyle = StyleSheet.create({
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
  spacing: {
    marginBottom: 10,
  },
  detailsTop: { margin: 10 },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: responsiveFontSize(5),
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  descriptive: {
    color: "#b9b7b7",
    fontSize: 12,
  },
  fastImageView: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  ownerImage: {
    width: 20,
    height: 20,
  },
  ownerName: {
    color: "white",
    fontSize: 14,
  },
  subdescriptiveText: {
    color: "#b9b7b7",
    fontSize: 12.5,
  },
  interactionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    right: 10,
  },
  interactionView: {
    flexDirection: "row",
    alignItems: "center",
  },
  subInteractionView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  playContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
  extraView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
