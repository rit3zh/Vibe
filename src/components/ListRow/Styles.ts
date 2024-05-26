import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const ListRowStyle = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    width: "90%",
    height: "90%",
    borderWidth: 0.4,
    borderColor: "#4d4d4d",
    borderRadius: 9,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "white",
  },
  nameContianer: {
    bottom: 10,
  },
  descriptiveText: {
    color: "#8c8c8c",
  },
  descriptiveContainer: {
    marginTop: 3,
  },
});
