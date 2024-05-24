import { View, Text, Image } from "react-native";
import React from "react";
import { SearchTracks } from "@/interfaces/typings";
import { MusicSearchStyle as style } from "./MusicSearchStyle";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import { GradientView } from "../GradientView/GradientView";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  track?: SearchTracks;
}

export const MusicSearch: React.FC<Props> = ({
  track,
}: Props): JSX.Element & React.ReactNode => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null;

  return (
    <GradientView style={style.container} theme="dark">
      <Image source={{ uri: track.image }} style={style.image} />

      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          numberOfLines={1}
          style={{ color: "white", fontSize: 14, maxWidth: 200 }}
        >
          {track.name}
        </Text>
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
      </View>

      <View style={style.ellipsisContainer}>
        <Ionicons name="ellipsis-horizontal" color={"white"} size={24} />
      </View>
    </GradientView>
  );
};
