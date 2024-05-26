import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const HomeStyle = StyleSheet.create({
  trendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingContainer: {
    margin: 20,
  },
  heading: {
    color: "white",
    fontSize: responsiveFontSize(3.3),
  },
});
