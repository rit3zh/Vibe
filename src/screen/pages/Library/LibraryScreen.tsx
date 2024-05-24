import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { GradientView, LibraryListItem, RecentAdded } from "@/components";
import * as Constants from "@/utils/constants/index";
import { LibraryStyles as styles } from "@/screen/styles/pages/library-screen/Library";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { List, Item, IItemProps } from "react-native-ui-devkit";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Fonts, useInitialFonts } from "@/utils/hooks";

export function LibraryScreen(props: NativeStackHeaderProps) {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.CircularNormal : null;
  const _list: Array<IItemProps> = [
    {
      onPress: async () => {},
      style: {
        backgroundColor: "transparent",
        marginBottom: 10,
        top: 10,
      },
      component: (
        <LibraryListItem
          name="Playlists"
          iconComponent={
            <SimpleLineIcons name="playlist" color={"white"} size={22} />
          }
          chevron
        />
      ),
    },

    {
      onPress: async () => {},
      style: {
        backgroundColor: "transparent",
        marginBottom: 10,
        top: 10,
      },
      component: (
        <LibraryListItem
          name="Albums"
          iconComponent={
            <Ionicons name="albums-outline" size={24} color="white" />
          }
          chevron
        />
      ),
    },

    {
      onPress: async () => {},
      style: {
        backgroundColor: "transparent",
        marginBottom: 10,
        top: 10,
      },
      component: (
        <LibraryListItem
          name="Songs"
          iconComponent={
            <Ionicons name="musical-note" size={24} color="white" />
          }
          chevron
        />
      ),
    },

    {
      onPress: async () => {},
      style: {
        backgroundColor: "transparent",
        marginBottom: 10,
        top: 10,
      },
      component: (
        <LibraryListItem
          name="Music Videos"
          iconComponent={
            <MaterialIcons name="music-video" size={24} color="white" />
          }
          chevron
        />
      ),
    },
    {
      onPress: async () => {},
      style: {
        backgroundColor: "transparent",
        marginBottom: 10,
        top: 10,
      },
      component: (
        <LibraryListItem
          name="Genres"
          iconComponent={
            <MaterialCommunityIcons
              name="guitar-electric"
              size={24}
              color="white"
            />
          }
          chevron
        />
      ),
    },
    {
      onPress: async () => {},
      style: {
        backgroundColor: "transparent",
        top: 10,
      },
      component: (
        <LibraryListItem
          name="Downloaded"
          iconComponent={
            <Ionicons name="cloud-download-outline" size={24} color="#ffffff" />
          }
          chevron
        />
      ),
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      contentInsetAdjustmentBehavior="always"
    >
      <GradientView
        theme="dark"
        style={{
          flex: 1,
        }}
      >
        <List
          data={_list}
          separators={true}
          expanded={true}
          marginTop={false}
        />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontFamily: font }]}>
            Recently Added
          </Text>
        </View>

        <FlatList
          data={Constants.RES_TRACKS.slice(0, 4)}
          keyExtractor={(key) => key.id}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          renderItem={({ item, index }) => (
            <RecentAdded
              index={index}
              length={Constants.RES_TRACKS.slice(0, 4).length}
              {...item}
            />
          )}
        />
      </GradientView>
    </ScrollView>
  );
}
