import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ArtistInformationStyles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 40,
    marginBottom: 0,
    borderRadius: 0,
    backgroundColor: "#1a1a1a",
    flex: 1,
  },
  flatlist: {
    flex: 1,

    justifyContent: "center",
  },
  imageView: {
    width: width,
    height: height / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 19,
    height: "90%",
  },
  listeners: {
    color: "white",
    fontSize: 40,
  },
  statsContainer: {
    marginLeft: 10,
  },
  below: {
    fontSize: 15,
    color: "white",
    bottom: 5,
  },
  bioContainer: {
    marginTop: 10,
  },
  biography: {
    color: "#b8b8b8",
    fontSize: 14,
  },
  artstStatsContainer: {
    margin: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  countriesText: {
    color: "white",
    fontWeight: "bold",
  },
  aboutContainer: {
    top: 10,
  },
  aboutText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  statsDescriptiveContainer: {
    flexDirection: "column",
  },
  monthlyListenersText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  listenersContainer: {
    marginTop: 5,
  },
  listenersText: {
    color: "#828282",
  },
});
