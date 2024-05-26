import {
  View,
  Text,
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import { ListTitleStyle as styles } from "./Styles";
import { Fonts, useInitialFonts } from "@/utils/hooks/useCustomFont";
import FastImage from "react-native-fast-image";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

interface ImageProps {
  url?: string;
  style?: StyleProp<ImageStyle>;
}

interface Props {
  title: string;
  size?: number;
  regular?: boolean;
  chevron?: boolean;
  image?: ImageProps;
  descriptive?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  radius?: number;
}

export const ListTitle: React.FC<Props> = ({ ...props }: Props) => {
  const FontLoaded = useInitialFonts();

  const bold = FontLoaded ? Fonts.Circular : undefined;
  const regular = FontLoaded ? Fonts.CircularNormal : undefined;

  return (
    <React.Fragment>
      <View
        style={{
          width: 200,
          flexDirection: "row",
        }}
      >
        {props.image ? (
          <View>
            <FastImage
              source={{ uri: props.image.url }}
              style={[
                styles.image,
                { borderRadius: props.radius ? props.radius : 99 },
              ]}
            />
          </View>
        ) : null}

        <View style={styles.content}>
          {props.descriptive ? (
            <Text style={styles.descriptive}>{props.descriptive}</Text>
          ) : null}

          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.title,
                {
                  fontFamily: props.regular === true ? regular : bold,
                  fontSize: props.size ? props.size : 19,
                },
              ]}
            >
              {props.title}
            </Text>

            {props.chevron ? (
              <View style={styles.chevron}>
                <FontAwesome name="chevron-right" size={18} color="#949494" />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};
