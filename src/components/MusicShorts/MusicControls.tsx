import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export const MusicControls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Ionicons name={"volume-medium-outline"} color={"white"} size={35} />
        </View>
        <View style={styles.icon}>
          <Ionicons name={"share-outline"} color={"white"} size={30} />
        </View>
        <View style={styles.icon}>
          <AntDesign name={"ellipsis1"} color={"white"} size={30} />
        </View>

        <View style={styles.icon}>
          <Ionicons name={"add-circle-outline"} color={"white"} size={35} />
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    width,
    bottom: 50,
    alignItems: "flex-end",
    right: 0,
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginTop: 20,
  },
});
