import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { HeaderImageStyle as styles } from "./Styles";
import FastImage from "react-native-fast-image";
import { Fonts, useInitialFonts } from "@/utils/hooks";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  image: string;
  text?: string;
  onBackPress?: () => any;
  onPlayPress?: () => any;
}

export const HeaderImage: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;

  return (
    <View style={styles.headerComponentView}>
      <View
        style={{
          flex: 1,
        }}
      >
        <FastImage
          source={{
            uri: props.image,
          }}
          style={styles.headerImage}
        />

        <View
          style={{
            position: "absolute",
          }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.interaction}>
              <Text
                numberOfLines={2}
                style={[
                  styles.title,
                  {
                    fontFamily: font,
                  },
                ]}
              >
                {props.text}
              </Text>
              <TouchableOpacity onPress={props.onPlayPress}>
                <View style={styles.playContainer}>
                  <Ionicons
                    name="play-sharp"
                    color={"black"}
                    size={25}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
