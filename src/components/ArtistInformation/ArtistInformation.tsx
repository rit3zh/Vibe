import { View, Text, FlatList } from "react-native";
import React from "react";
import { ArtistInformationStyles as styles } from "./Styles";
import FastImage from "react-native-fast-image";
import { Fonts, useInitialFonts } from "@/utils/hooks";

interface Cities {
  numberOfListeners?: number;
  city?: string;
  country?: string;
}

interface Props {
  biography: string;
  images?: string[];
  listeners?: number;
  cities?: Cities[];
}

export const ArtistInformation: React.FC<Props> = ({
  ...props
}: Props): JSX.Element & React.ReactNode => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(props.listeners);
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;

  const withoutHtml: string = props.biography.replace(/<[^>]*>/g, "");

  const cleanAbout: string = withoutHtml.replace(/[^\w\s.,]/g, "");
  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.images}
          keyExtractor={(key, index) => `${key}_${index}`}
          renderItem={({ item }) => (
            <React.Fragment>
              <View style={styles.imageView}>
                <FastImage source={{ uri: item }} style={styles.image} />
              </View>
            </React.Fragment>
          )}
        />

        <View style={styles.statsContainer}>
          <Text
            style={[
              styles.listeners,
              {
                fontFamily: font,
              },
            ]}
          >
            {formattedNumber}
          </Text>

          <Text
            style={[
              styles.below,
              {
                fontFamily: fontRegular,
              },
            ]}
          >
            monthly listeners
          </Text>

          <View style={styles.aboutContainer}>
            <Text style={[styles.aboutText, {}]}>About</Text>
          </View>

          <View style={styles.bioContainer}>
            <Text style={[styles.biography, {}]}>{cleanAbout}</Text>
          </View>
        </View>
        <FlatList
          data={props.cities}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.artstStatsContainer}>
                <View style={styles.statsDescriptiveContainer}>
                  <Text
                    style={{
                      ...styles.countriesText,
                      fontFamily: fontRegular,
                    }}
                  >
                    {item.city}, {item.country}
                  </Text>
                  <View style={styles.listenersContainer}>
                    <Text
                      style={{
                        ...styles.listenersText,
                        fontFamily: fontRegular,
                      }}
                    >
                      {item.numberOfListeners.toLocaleString()} listeners
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
