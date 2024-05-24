import { View, Text } from "react-native";
import React from "react";
import { LibraryStyle as styles } from "./LibraryStyles";
import { Ionicons } from "@expo/vector-icons";

interface LibraryItemProps {
  name: string;
  iconComponent?: React.ReactNode;
  chevron?: boolean;
}

export const LibraryListItem: React.FC<LibraryItemProps> = ({
  name,
  chevron,
  iconComponent,
}: LibraryItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {iconComponent}
        <View style={styles.nameContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
        </View>
      </View>
      {chevron && (
        <View style={styles.chevronView}>
          <Ionicons name="chevron-forward" color={"#7a7a7a"} size={22} />
        </View>
      )}
    </View>
  );
};
