import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import { PlaylistStyle as styles } from "@/screen/styles/pages/playlist-screen/Playlist";
import * as Constants from "@/utils/constants/index";
import { Fonts, useInitialFonts, useNavigationOptions } from "@/utils/hooks";
import FastImage from "react-native-fast-image";
import { HeaderTop, ListView, MiniSampleView } from "@/components";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Header } from "@react-navigation/elements";
import { FlatList } from "react-native-gesture-handler";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getTotalRelativeDuration } from "@/miscellaneous";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import DeviceInfo from "react-native-device-info";

interface ChildrenComponent extends NativeStackHeaderProps {
  footer?: () => React.ReactNode;
}
export const PlaylistRenderWithoutHeader: React.FC<ChildrenComponent> = ({
  ...props
}: ChildrenComponent) => {
  const list = Constants.PLAYLIST.data.playlistV2;

  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;
  const [totalTime, setTotalTime] = useState<string>();
  const _id = () => "id" + Math.random().toString(16).slice(2);

  useNavigationOptions(props, {
    headerShown: true,
    headerTransparent: true,
    headerLargeTitle: false,
    headerTitle: "",
    headerSearchBarOptions: {
      placeholder: "Search",
    },
    headerBackTitleVisible: true,
    headerTintColor: "white",
  });

  useLayoutEffect(() => {
    const array: number[] = [];

    list.content.items.map((item) => {
      const listItem = item.itemV2.data.trackDuration.totalMilliseconds;
      array.push(listItem);
    });

    const formattedTime = getTotalRelativeDuration(array);
    setTotalTime(formattedTime);
  }, []);
  const dynamicIsland = DeviceInfo.hasDynamicIsland();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <AnimatedScrollView
        topBarHeight={
          dynamicIsland ? responsiveHeight(10) : responsiveHeight(9)
        }
        TopNavBarComponent={
          <>
            <SafeAreaView style={{}}>
              <HeaderTop
                hideBack={true}
                style={{
                  top: dynamicIsland
                    ? responsiveHeight(3)
                    : responsiveHeight(2),
                }}
                height={responsiveHeight(12)}
                backgroundColor={"#141414"}
                title={list.name}
              />
            </SafeAreaView>
          </>
        }
        headerMaxHeight={300}
        style={{ backgroundColor: "transparent" }} // Set the background color to transparent
        HeaderComponent={
          <SafeAreaView style={styles.headerComponentView}>
            <View
              style={{
                flex: 1,
                marginTop: 20,
              }}
            >
              <FastImage
                source={{
                  uri: Constants.PLAYLIST.data?.playlistV2.images?.items[0]?.sources?.at(
                    -1
                  )?.url,
                }}
                style={{
                  width: 280,
                  height: 280,
                }}
              />
            </View>
          </SafeAreaView>
        }
      >
        <View style={[styles.detailsTop, { bottom: 0, marginTop: 10 }]}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: font,
                fontSize: responsiveFontSize(4),
              },
            ]}
          >
            {list.name}
          </Text>

          <Text
            numberOfLines={1}
            style={[
              styles.descriptive,
              {
                fontFamily: fontRegular,
              },
            ]}
          >
            {list.description}
          </Text>

          <View style={styles.fastImageView}>
            <FastImage
              source={{ uri: list.ownerV2.data.avatar.sources.at(-1).url }}
              style={styles.ownerImage}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={[
                  styles.ownerName,
                  {
                    fontFamily: font,
                  },
                ]}
              >
                {list.ownerV2.data.name}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 5 }}>
            <Text
              style={[
                styles.subdescriptiveText,
                {
                  fontFamily: fontRegular,
                },
              ]}
            >
              {new Intl.NumberFormat("en-US").format(list.followers)} Saves・
              {totalTime}
            </Text>
          </View>

          <View style={styles.interactionWrapper}>
            <View style={styles.interactionView}>
              <MiniSampleView
                canvas={Constants.EXPLORE_MORE_SAMPLE[0].canvas}
                onPress={() => {}}
              />
              <View style={styles.subInteractionView}>
                <Ionicons
                  name="add-circle-outline"
                  size={28.9}
                  color={"#969696"}
                />
                <SimpleLineIcons
                  name="arrow-down-circle"
                  size={22}
                  color="#969696"
                  style={{ marginLeft: 25 }}
                />
                <Ionicons
                  name="ellipsis-horizontal-sharp"
                  size={22}
                  color={"#969696"}
                  style={{ marginLeft: 25 }}
                />
              </View>
            </View>
            <View style={styles.extraView}>
              <SimpleLineIcons
                name="shuffle"
                size={25}
                color="#c3c3c3"
                style={{ marginRight: 20 }}
              />
              <View style={styles.playContainer}>
                <Ionicons
                  name="play-sharp"
                  size={25}
                  style={{ marginLeft: 3 }}
                  color={"black"}
                />
              </View>
            </View>
          </View>
        </View>

        <FlatList
          data={Constants.SEARCH_TRACKS}
          keyExtractor={() => _id()}
          scrollEnabled={false}
          contentContainerStyle={{ backgroundColor: "transparent", left: 5 }}
          renderItem={(data) => (
            <ListView
              colors={[
                "#000",
                Constants.PLAYLIST.data.playlistV2.images.items[0]
                  .extractedColors.colorRaw.hex,
              ]}
              track={data.item}
            />
          )}
        />
        <View style={styles.spacing}>{props.footer()}</View>
      </AnimatedScrollView>
    </SafeAreaView>
  );
};
