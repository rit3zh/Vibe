import { View, Text, StyleSheet } from "react-native";
import React from "react";
interface Props {
  text?: string;
}
export const HeaderText: React.FC<Props> = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    left: 30,
    marginTop: 0,
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
