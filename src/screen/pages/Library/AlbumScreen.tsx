import { View, Text, SafeAreaView, Dimensions, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import * as Constants from "@/utils/constants/index";
import { Fonts, useInitialFonts, useNavigationOptions } from "@/utils/hooks";
import FastImage from "react-native-fast-image";
import { FlatlistPlaylist, ListRow, ListTitle, ListView } from "@/components";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Header } from "@react-navigation/elements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getTotalRelativeDuration } from "@/miscellaneous";
import { AlbumStyle as styles } from "@/screen/styles/pages/album-screen/Album";
import ReadMore from "@fawazahmed/react-native-read-more";
import DeviceInfo from "react-native-device-info";
import { responsiveHeight } from "react-native-responsive-dimensions";

interface ChildrenComponent extends NativeStackHeaderProps {
  footer?: () => React.ReactNode;
}
export const AlbumScreen: React.FC<ChildrenComponent> = ({
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
    headerBackTitleVisible: false,
    headerTintColor: "white",
  });
  const album = Constants.ALBUM_ARTIST.data.albumUnion;

  useLayoutEffect(() => {
    const array: number[] = [];

    album.tracks.items.map((item) => {
      const listItem = item.track.duration.totalMilliseconds;
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
        disableScale={true}
        topBarHeight={
          dynamicIsland ? responsiveHeight(12) : responsiveHeight(8)
        }
        TopNavBarComponent={
          <>
            <View
              style={{
                backgroundColor: "black",
                width: Dimensions.get("window").width,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SafeAreaView
                style={{
                  width: Dimensions.get("window").width,
                  height: dynamicIsland ? 120 : 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Header
                  title={album.name}
                  headerTitleStyle={{
                    marginTop: 20,
                    top: responsiveHeight(1),
                  }}
                  headerLeftLabelVisible={true}
                />
              </SafeAreaView>
            </View>
          </>
        }
        headerMaxHeight={300}
        style={{ backgroundColor: "transparent" }}
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
                  uri: Constants.ALBUM_ARTIST.data.albumUnion.coverArt.sources.at(
                    -1
                  ).url,
                }}
                style={{
                  width: 280,
                  height: 280,
                  borderWidth: 0.8,
                  borderColor: "#2e2e2e",
                  borderRadius: 8,
                }}
              />
            </View>
          </SafeAreaView>
        }
      >
        <View style={[styles.detailsTop, { top: 5 }]}>
          <View style={styles.nameContainer}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: font,
                },
              ]}
            >
              {album.name}
            </Text>
          </View>
          <View
            style={[
              styles.nameContainer,
              {
                flexDirection: "row",
              },
            ]}
          >
            <FastImage
              source={{
                uri: album.artists.items[0].visuals.avatarImage.sources.at(-1)
                  .url,
              }}
              style={{
                height: 25,
                width: 25,
                borderRadius: 99,
                marginRight: 5,
              }}
            />

            <Text
              numberOfLines={1}
              style={[
                styles.descriptive,
                {
                  fontFamily: fontRegular,
                  fontSize: 16,
                },
              ]}
            >
              {`${album.artists.items[0].profile.name}・${
                album.type.charAt(0).toUpperCase() +
                album.type.slice(1).toLowerCase()
              }`}
            </Text>
          </View>

          <View
            style={[
              styles.nameContainer,
              {
                flexDirection: "row",
                marginTop: 5,
              },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.descriptive,
                {
                  fontFamily: fontRegular,
                  fontSize: 12,
                },
              ]}
            >
              {` ${new Date(
                album.date.isoString
              ).getFullYear()} ・ ${album.discs.items
                .map((a) => a.tracks.totalCount)
                .join(",")} Songs ・ ${totalTime}`}
            </Text>

            <View style={{ left: 10 }}>
              <FontAwesome5 name="gripfire" size={18} color="#b9b7b7" />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.interactionWrapper}>
              <View style={styles.button}>
                <View style={styles.buttonInteraction}>
                  <Ionicons name="play" color={"white"} size={20} />
                  <View style={styles.interaction}>
                    <Text style={{ color: "white" }}>Play</Text>
                  </View>
                </View>
              </View>
              <View style={styles.button}>
                <View style={styles.buttonInteraction}>
                  <Ionicons name="shuffle-outline" color={"white"} size={20} />
                  <View style={styles.interaction}>
                    <Text style={{ color: "white" }}>Shuffle</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              marginTop: 10,
            }}
          >
            <ReadMore
              style={styles.description}
              seeLessStyle={{ color: "white", fontSize: 12, fontWeight: "500" }}
              seeMoreStyle={{
                color: "white",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              {album.description}
            </ReadMore>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#3a3a3a",
                width: Dimensions.get("window").width,
                top: 10,
                left: 10,
              }}
            />
          </View>
        </View>

        <FlatList
          data={album.tracks.items}
          keyExtractor={() => _id()}
          scrollEnabled={false}
          contentContainerStyle={{ backgroundColor: "transparent", left: 5 }}
          renderItem={(data) => (
            <ListView
              fontSize={14.5}
              showDescriptive={false}
              marginLeft={35}
              ellipsisSize={20}
              height={54}
              showImage={false}
              index={data.index + 1}
              displayIndex
              colors={[
                "#000",
                Constants.PLAYLIST.data.playlistV2.images.items[0]
                  .extractedColors.colorRaw.hex,
              ]}
              track={{
                name: data.item.track.name,
                artists: data.item.track.artists.items.map(
                  (A) => A.profile.name
                ),
                image: album.coverArt.sources.at(-1).url,
              }}
            />
          )}
        />

        <View style={styles.copyrightContainer}>
          <Text style={[styles.copyright, { marginBottom: 5, fontSize: 15 }]}>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(album.date.isoString))}
          </Text>
          <Text style={styles.copyright}>{album.copyright.items[0].text}</Text>
        </View>
        <View style={styles.footer}>
          <ListTitle
            descriptive="More by"
            title={`${album.artists.items[0].profile.name}`}
            image={{
              url: album.artists.items[0].visuals.avatarImage.sources.at(-1)
                .url,
            }}
            chevron
          />

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={
              album.moreAlbumsByArtist.items[0].discography
                .popularReleasesAlbums.items
            }
            horizontal
            keyExtractor={(key) => key.id}
            renderItem={({ index, item }) => (
              <ListRow
                name={item.name}
                image={item.coverArt.sources.at(-1).url}
                fontSize={15}
                height={190}
                marginLeft={1}
                bottom={1}
                width={190}
                descriptiveText={`${item.date.year}・${album.artists.items.map(
                  (a) => a.profile.name
                )}`}
                descriptiveTextSize={12}
                maxWidth={180}
                right={10}
              />
            )}
          />
        </View>

        {/* <View style={styles.spacing}>{props.footer()}</View> */}
      </AnimatedScrollView>
    </SafeAreaView>
  );
};
