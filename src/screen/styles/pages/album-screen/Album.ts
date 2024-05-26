import { StyleSheet, Dimensions } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

export const AlbumStyle = StyleSheet.create({
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
  copyrightContainer: {
    marginTop: 10,
    marginLeft: 5,
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,

    marginLeft: 10,
  },
  copyright: {
    color: "#848484",
  },
  detailsTop: { margin: 10 },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 23,

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
    marginTop: 10,
    justifyContent: "center",
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

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#202020",
    width: responsiveWidth(39),
    height: 40,
    margin: 10,
    borderColor: "#393939",
    borderWidth: 0.8,
    borderRadius: 5,
  },
  buttonInteraction: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  interaction: {
    marginLeft: 5,
  },
  description: {
    color: "#8e8e8e",
  },
});
