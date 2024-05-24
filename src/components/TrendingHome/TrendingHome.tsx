import { View, Text, Image } from "react-native";
import React from "react";
import { TrendingHomeStyles as styles } from "./styles";
import { useInitialFonts, Fonts } from "@/utils/hooks";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  _id: string;
  name: string;
  image: string;
  onPress?: (id: string) => any;
  subtitle?: string;
}

export const TrendingHome: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />

        <View style={styles.detailContainer}>
          <View style={styles.interactionWrapper}>
            <View style={styles.trendingTitleContainer}>
              <Text
                style={[
                  styles.trendingText,
                  {
                    fontFamily: font,
                  },
                ]}
              >
                # 1
              </Text>
              <View style={styles.interaction}>
                <View style={styles.titleContainer}>
                  <Text
                    style={[
                      styles.title,
                      {
                        fontFamily: font,
                      },
                    ]}
                  >
                    {props.name}
                  </Text>
                </View>

                <View style={styles.artistContainer}>
                  <Text
                    style={[
                      styles.artist,
                      {
                        fontFamily: font,
                      },
                    ]}
                  >
                    (Feat {props.subtitle})
                  </Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <View style={styles.rowContainer}>
                    <Ionicons name="play" color={"black"} size={23} />
                    <Text
                      style={[
                        styles.buttonText,
                        {
                          fontFamily: font,
                        },
                      ]}
                    >
                      Listen Now
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
