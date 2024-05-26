import { View, Text, Dimensions } from "react-native";
import React from "react";
import { SearchTracks } from "@/interfaces/typings";
import { ListViewStyle as style } from "./ListViewStyles";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import { GradientView } from "../GradientView/GradientView";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import FastImage from "react-native-fast-image";
interface Props {
  track?: SearchTracks;
  colors?: string[];
  showImage?: boolean;
  index?: number;
  marginLeft?: number;
  ellipsisSize?: number;
  displayIndex?: boolean;
  showDescriptive?: boolean;
  fontSize?: number;
  showBorder?: boolean;
  height?: number;
}

export const ListView: React.FC<Props> = ({
  track,
  colors,
  showImage = true,
  index,
  marginLeft,
  ellipsisSize = 24,
  displayIndex = false,
  showDescriptive = true,
  fontSize,
  showBorder = false,
  height,
}: Props): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null;

  return (
    <View
      style={[
        style.container,
        {
          borderBottomWidth: 0.5,
          borderBottomColor: "#252525",
          borderBottomStartRadius: 20,
          height: !height ? 70 : height,
        },
      ]}
    >
      {showImage ? (
        <FastImage source={{ uri: track.image }} style={style.image} />
      ) : null}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {displayIndex ? (
          <Text style={{ color: "#7c7c7c", fontSize: 15 }}>{index}.</Text>
        ) : null}
        <View
          style={{
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: "white",
              fontSize: fontSize ? fontSize : 14,
              maxWidth: 200,
            }}
          >
            {track.name}
          </Text>
          {showDescriptive ? (
            <Text
              numberOfLines={1}
              style={{
                color: "#848484",
                maxWidth: 120,

                fontSize: 12,
              }}
            >
              {track.artists.join(",")}
            </Text>
          ) : null}
        </View>

        <View
          style={[
            style.ellipsisContainer,
            {
              marginRight: !marginLeft ? 20 : marginLeft,
            },
          ]}
        >
          <Ionicons
            name="ellipsis-horizontal"
            color={"white"}
            size={ellipsisSize}
          />
        </View>
      </View>
    </View>
  );
};
