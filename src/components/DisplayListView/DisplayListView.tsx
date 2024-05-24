import { View, Text, Image } from "react-native";
import React from "react";
import { DisplayListViewStyles as styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: string;
  image: string;
  artists?: string;
  date: string;
}

export const DisplayListView: React.FC<Props> = ({
  name,
  image,
  artists,
  date,
}: Props) => {
  const formatDate = new Date(date).getFullYear();

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.artists}>
          {artists}・{formatDate}
        </Text>
      </View>
      <Ionicons name="ellipsis-horizontal" color={"white"} size={20} />
    </View>
  );
};
