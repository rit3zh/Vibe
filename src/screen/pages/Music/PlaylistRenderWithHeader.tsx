import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import { PlaylistStyle as styles } from "@/screen/styles/pages/playlist-screen/Playlist";
import * as Constants from "@/utils/constants/index";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import FastImage from "react-native-fast-image";
import { ListView, MiniSampleView } from "@/components";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { HeaderTop } from "@/components/index";
import { HeaderBackButton } from "@react-navigation/elements";
import { FlatList } from "react-native-gesture-handler";
import { getTotalRelativeDuration } from "@/miscellaneous";
import DeviceInfo from "react-native-device-info";
import { responsiveHeight } from "react-native-responsive-dimensions";

interface ChildrenComponent {
  footer?: () => React.ReactNode;
}

export const PlaylistRenderWithHeader: React.FC<ChildrenComponent> = ({
  ...props
}: ChildrenComponent) => {
  const _image_key: string = `image_url`;
  const getImageKey = Constants.PLAYLIST.data?.playlistV2?.attributes.filter(
    ({ key }) => key === _image_key
  );
  const list = Constants.PLAYLIST.data.playlistV2;
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;
  const [totalTime, setTotalTime] = useState<string>();
  const _id = () => "id" + Math.random().toString(16).slice(2);
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
    <View
      style={{
        flex: 1,
      }}
    >
      <AnimatedScrollView
        headerMaxHeight={
          dynamicIsland ? responsiveHeight(48) : responsiveHeight(68)
        }
        HeaderNavbarComponent={
          <>
            <View
              style={{
                width: Dimensions.get("window").width,
                marginTop: dynamicIsland ? 50 : 25,
                marginLeft: 25,
              }}
            >
              <HeaderBackButton tintColor="white" />
            </View>
          </>
        }
        topBarHeight={
          dynamicIsland ? responsiveHeight(11) : responsiveHeight(8)
        }
        TopNavBarComponent={
          <HeaderTop
            style={{
              bottom: dynamicIsland
                ? responsiveHeight(-2)
                : responsiveHeight(-2),
            }}
            height={dynamicIsland ? responsiveHeight(12) : responsiveHeight(11)}
            title={list.name}
          />
        }
        style={{ backgroundColor: "transparent" }} // Set the background color to transparent
        HeaderComponent={
          <SafeAreaView style={styles.headerComponentView}>
            <View
              style={{
                flex: 1,
                marginTop: 0,
              }}
            >
              <FastImage
                source={{
                  uri: getImageKey[0].value,
                }}
                style={{
                  width: Dimensions.get("window").width,
                  height: 450,
                }}
              />

              <View
                style={{
                  position: "absolute",
                }}
              >
                <View
                  style={{
                    height: 450,
                    width: Dimensions.get("window").width,
                    marginLeft: 10,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={[
                      styles.title,
                      {
                        fontFamily: font,
                      },
                    ]}
                  >
                    {list.name}
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        }
      >
        <View style={styles.detailsTop}>
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
          <FlatList
            data={Constants.SEARCH_TRACKS}
            keyExtractor={() => _id()}
            scrollEnabled={false}
            contentContainerStyle={{ backgroundColor: "transparent" }}
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
          {props.footer()}
        </View>
      </AnimatedScrollView>
    </View>
  );
};
