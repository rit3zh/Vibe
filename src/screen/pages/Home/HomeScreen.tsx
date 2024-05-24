import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import { HomeStyle as styles } from "@/screen/styles/pages/home-screen/Home";
import {
  FlatlistPlaylist,
  GradientView,
  TrendingHome,
  DisplayList,
  DisplayListView,
} from "@/components";
import * as Constants from "@/utils/constants/index";
import { Fonts, useInitialFonts } from "@/utils/hooks";

export function HomeScreen() {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : undefined;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <GradientView style={{ flex: 1 }} theme="dark">
        <View style={styles.trendingContainer}>
          <TrendingHome
            _id={Constants.ALBUM.id}
            image={Constants.ALBUM.images[0]?.url}
            name={Constants.ALBUM.name}
            subtitle={Constants.ALBUM.artists.map((a) => a.name).join(",")}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text
            style={[
              styles.heading,
              {
                fontFamily: font,
              },
            ]}
          >
            {
              Constants.HOME_1.data?.browse.sections?.items[0].data.title
                .transformedLabel
            }
          </Text>

          <FlatList
            data={
              Constants.HOME_1.data?.browse.sections?.items[0].sectionItems
                .items
            }
            keyExtractor={(key) => key.uri}
            horizontal
            renderItem={({ item, index }) => (
              <FlatlistPlaylist
                _id={item.content.data?.uri}
                image={
                  item.content?.data.images?.items?.at(-1)?.sources?.at(-1)?.url
                }
                title={item.content?.data.name}
                description={item.content.data.description}
              />
            )}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text
            style={[
              styles.heading,
              {
                fontFamily: font,
              },
            ]}
          >
            {
              Constants.HOME_2.data?.browse.sections?.items[0].data.title
                .transformedLabel
            }
          </Text>

          <FlatList
            data={
              Constants.HOME_2.data?.browse.sections?.items[0].sectionItems
                .items
            }
            keyExtractor={(key) => key.uri}
            horizontal
            renderItem={({ item, index }) => (
              <FlatlistPlaylist
                _id={item.content.data?.uri}
                image={
                  item.content?.data.images?.items?.at(-1)?.sources?.at(-1)?.url
                }
                title={item.content?.data.name}
                description={item.content.data.description}
              />
            )}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text
            style={[
              styles.heading,
              {
                fontFamily: font,
              },
            ]}
          >
            {"Hot Hits"}
          </Text>

          <DisplayList
            array={Constants.RES_TRACKS}
            keyExtractor={(key) => key.id}
            chunkSize={4}
            renderItem={({ ...item }) => (
              <DisplayListView
                name={item.name}
                image={item.album.images[0]?.url}
                artists={item.artists.map((a) => a.name).join(", ")}
                date={item.album.release_date}
              />
            )}
          />
        </View>
      </GradientView>
    </ScrollView>
  );
}
