import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  content: string;
}
type Center = "center";
const center: Center = "center";

export const CustomDescriptiveText: React.FC<Props> = ({
  content,
}: Props): JSX.Element & React.ReactNode => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
        }}
      >
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: center,
    alignItems: center,
    marginTop: 30,
    marginBottom: 20,
  },
});
