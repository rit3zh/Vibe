import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";
import React from "react";
import { ArtistStyle as styles } from "@/screen/styles/pages/artist-screen/Artist";
import {
  DisplayList,
  DisplayListView,
  HeaderImage,
  HeaderNavBar,
  ArtistBestPick,
  ListRow,
  ListTitle,
  ArtistInformation,
  HeaderTop,
} from "@/components";
import { AnimatedScrollView } from "@kanelloc/react-native-animated-header-scroll-view";
import * as Constants from "@/utils/constants/index";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import { responsiveHeight } from "react-native-responsive-dimensions";
import DeviceInfo from "react-native-device-info";

export function Artist() {
  const artist = Constants.ARTIST.data.artistUnion;
  const { width, height } = Dimensions.get("window");

  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;
  const dynamicIsland = DeviceInfo.hasDynamicIsland();

  return (
    <View style={styles.container}>
      <AnimatedScrollView
        headerMaxHeight={400}
        HeaderComponent={
          <HeaderImage
            text={artist.profile.name}
            image={artist.visuals.headerImage.sources.at(-1).url}
          />
        }
        topBarHeight={
          dynamicIsland ? responsiveHeight(10) : responsiveHeight(8)
        }
        TopNavBarComponent={
          <HeaderTop
            style={{
              top: 20,
            }}
            height={dynamicIsland ? 110 : 100}
            backgroundColor={"#141414"}
            title={artist.profile.name}
          />
        }
        HeaderNavbarComponent={<HeaderNavBar />}
      >
        <ArtistBestPick
          image={
            artist.discography.popularReleasesAlbums.items[0].coverArt.sources.at(
              -1
            ).url
          }
          name={artist.discography.popularReleasesAlbums.items[0].name}
          total={
            artist.discography.popularReleasesAlbums.items[0].tracks.totalCount
          }
        />

        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: font,
              },
            ]}
          >
            Top Songs
          </Text>
        </View>
        <DisplayList
          array={artist.discography.topTracks.items}
          keyExtractor={(key) => key.uid}
          chunkSize={4}
          renderItem={({ ...item }) => (
            <DisplayListView
              screenWidth={width}
              backgroundColor="transparent"
              name={item.track.name}
              fontSize={13.2}
              image={item.track.albumOfTrack.coverArt.sources.at(-1).url}
              artists={item.track.artists.items
                .map((a) => a.profile.name)
                .join(", ")}
            />
          )}
        />
        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: font,
              },
            ]}
          >
            Essentials Releases
          </Text>
        </View>
        <FlatList
          data={Constants.ARTIST.data.artistUnion.discography.popularReleasesAlbums.items.map(
            (a) => a
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ListRow
              name={item.name}
              descriptiveMaxWidth={width - 40}
              descriptiveText={`${item.copyright.items[0].text}`}
              image={item.coverArt.sources.at(-1).url}
            />
          )}
        />

        <View style={[styles.titleContainer, { marginTop: 0 }]}>
          <Text
            style={[
              styles.title,
              {
                fontFamily: font,
              },
            ]}
          >
            Albums
          </Text>
        </View>
        <FlatList
          data={Constants.ARTIST.data.artistUnion.discography.albums.items.map(
            (item) => item.releases.items[0]
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={14}
              height={190}
              marginLeft={1}
              bottom={1}
              width={190}
              maxWidth={190}
              right={10}
              name={item.name}
              image={item.coverArt.sources.at(-1).url}
            />
          )}
        />

        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <ListTitle title={"Singles"} size={25} />
        </View>

        <FlatList
          data={Constants.ARTIST.data.artistUnion.discography.singles.items.map(
            (item) => item.releases.items[0]
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={12}
              height={190}
              marginLeft={1}
              bottom={1}
              width={190}
              maxWidth={180}
              right={10}
              name={item.name}
              image={item.coverArt.sources.at(-1).url}
            />
          )}
        />

        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <ListTitle title={"Compilations"} size={25} />
        </View>

        <FlatList
          data={Constants.ARTIST.data.artistUnion.discography.compilations.items.map(
            (item) => item.releases.items[0]
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={12}
              height={190}
              marginLeft={1}
              bottom={1}
              width={190}
              maxWidth={180}
              right={10}
              name={item.name}
              image={item.coverArt.sources.at(-1).url}
            />
          )}
        />

        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <ListTitle
            title={artist.profile.name}
            descriptive="Featuring"
            image={{ url: artist.visuals.avatarImage.sources.at(-1).url }}
            chevron
            size={25}
          />
        </View>

        <FlatList
          data={Constants.ARTIST.data.artistUnion.relatedContent.featuringV2.items.map(
            (item) => item.data
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={14}
              height={190}
              marginLeft={1}
              bottom={1}
              width={190}
              maxWidth={180}
              right={10}
              name={item.name}
              image={item.images.items.at(-1).sources.at(-1).url}
              descriptiveText={item.description}
            />
          )}
        />

        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <ListTitle title={"Appears On"} size={25} />
        </View>

        <FlatList
          data={Constants.ARTIST.data.artistUnion.relatedContent.appearsOn.items.map(
            (item) => item.releases.items[0]
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={14}
              height={190}
              marginLeft={1}
              bottom={1}
              width={190}
              maxWidth={180}
              right={10}
              name={item.name}
              image={item.coverArt.sources.at(-1).url}
              descriptiveText={`${item.date.year}・${
                item.type.charAt(0).toUpperCase() +
                item.type.slice(1).toLowerCase()
              }`}
            />
          )}
        />

        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <ListTitle
            title={artist.profile.name}
            descriptive="Discovered on"
            image={{ url: artist.visuals.avatarImage.sources.at(-1).url }}
            chevron
            size={25}
          />
        </View>

        <FlatList
          data={Constants.ARTIST.data.artistUnion.relatedContent.discoveredOnV2.items.map(
            (item) => item.data
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={14}
              height={190}
              marginLeft={1}
              bottom={1}
              width={190}
              maxWidth={180}
              right={10}
              name={item.name}
              image={item.images.items.at(-1).sources.at(-1).url}
              descriptiveText={item.description}
            />
          )}
        />

        <View>
          <ArtistInformation
            biography={artist.profile.biography.text}
            images={artist.visuals.gallery.items.map(
              (item) => item.sources.at(-1).url
            )}
            listeners={artist.stats.monthlyListeners}
            cities={artist.stats.topCities.items}
          />
        </View>

        <View style={[styles.titleContainer, { marginTop: 20 }]}>
          <ListTitle title="People also like" size={25} chevron />
        </View>

        <FlatList
          data={Constants.ARTIST.data.artistUnion.relatedContent.relatedArtists.items.map(
            (item) => item
          )}
          keyExtractor={(key) => key.id}
          horizontal
          pagingEnabled={false}
          renderItem={({ item }) => (
            <ListRow
              fontSize={14}
              height={120}
              bottom={1}
              width={120}
              marginLeft={1}
              maxWidth={120}
              textAlign="center"
              name={item.profile.name}
              imageStyle={{
                borderRadius: 99,
              }}
              image={item.visuals.avatarImage.sources.at(-1).url}
            />
          )}
        />
      </AnimatedScrollView>
    </View>
  );
}
