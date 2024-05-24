import { View, Text, Dimensions } from "react-native";
import React from "react";
import type { SearchTracks } from "@/interfaces/typings/index";
import { MusicSearchlStyle as style } from "./MusicSearchStyle";
import {
  Divider,
  IItemProps,
  ISwipeableProps,
  Item,
} from "react-native-ui-devkit";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MusicSearch } from "@/components/MusicRenderer/MusicSearch";
interface Props {
  track?: SearchTracks;
  length?: number;
  index?: number;
}

export const MusicSearchList: React.FC<Props> = ({
  track,
  index,
  length,
}: Props): React.ReactNode => {
  const _item: IItemProps & ISwipeableProps = {
    component: <MusicSearch track={track} />,

    swipeable: {
      left: [
        {
          icon: {
            name: "playlist-star",
            type: "material-community",
            color: "#fff",
            size: 35,
          },
          backgroundColor: "#6f55f5",
        },
        {
          icon: {
            name: "playlist-plus",
            type: "material-community",
            color: "#fff",
            size: 35,
          },
          backgroundColor: "#ff9500",
          onPress: () => alert("Warning"),
        },
      ],
    },
  };
  return (
    <GestureHandlerRootView>
      <Item
        data={_item}
        style={{
          top: 30,
          left: 5,
          marginBottom: index === length - 1 ? 45 : 0,
        }}
        marginTop={false}
        expanded={true}
      />
    </GestureHandlerRootView>
  );
};
