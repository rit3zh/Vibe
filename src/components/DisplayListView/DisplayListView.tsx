import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { DisplayListViewStyles as styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: string;
  image: string;
  artists?: string;
  date?: string;
  backgroundColor?: string;
  fontSize?: number;
  screenWidth?: number;
}

export const DisplayListView: React.FC<Props> = ({
  name,
  image,
  artists,
  date,
  backgroundColor,
  fontSize,
  screenWidth,
}: Props) => {
  const formatDate = new Date(date).getFullYear();
  const { width } = Dimensions.get("window");
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ? backgroundColor : "#151515",
          width: !screenWidth ? width - 40 : screenWidth,
        },
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={[
            styles.name,
            {
              fontSize: fontSize ? fontSize : 14,
            },
          ]}
        >
          {name}
        </Text>
        <Text style={styles.artists}>
          {artists} {date ? `・${formatDate}` : null}
        </Text>
      </View>
      <Ionicons name="ellipsis-horizontal" color={"white"} size={20} />
    </View>
  );
};
