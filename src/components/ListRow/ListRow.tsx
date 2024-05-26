import {
  View,
  Text,
  Dimensions,
  StyleProp,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ListRowStyle as styles } from "./Styles";
import FastImage from "react-native-fast-image";
import { Fonts, useInitialFonts } from "@/utils/hooks";
interface Chevron {
  include?: boolean;
  image?: string;
  text?: string;
}

interface Props {
  name: string;
  image?: string;
  descriptiveText?: string;
  width?: number;
  height?: number;
  imageStyle?: StyleProp<ImageStyle>;
  fontSize?: number;
  maxWidth?: number;
  numberOfLines?: number;
  marginLeft?: number;
  right?: number;
  textAlign?: "center" | "flex-start";
  bottom?: number;
  descriptiveMaxWidth?: number;
  descriptiveTextSize?: number;
  onPress?: () => any;
}

export const ListRow: React.FC<Props> = ({
  ...props
}: Props): JSX.Element & React.ReactNode => {
  const { width, height } = Dimensions.get("window");
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;
  const fontRegular = FontLoaded ? Fonts.CircularNormal : undefined;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={[
            styles.imageView,
            {
              width: props.width ? props.width : width,
              height: props.height ? props.height : height / 2,
            },
          ]}
        >
          <FastImage
            source={{ uri: props.image }}
            style={[styles.image, props.imageStyle as any]}
          />
        </View>

        <View
          style={[
            styles.nameContianer,
            {
              marginLeft: props.marginLeft ? props.marginLeft : 20,
              bottom: props.bottom ? props.bottom : 10,
              left: props.right ? props.right : 0,
              alignItems: props.textAlign ? props.textAlign : "flex-start",
            },
          ]}
        >
          <Text
            numberOfLines={props.numberOfLines ? props.numberOfLines : 2}
            style={[
              styles.name,
              {
                fontFamily: fontRegular,
                fontSize: props.fontSize ? props.fontSize : 17,
                maxWidth: props.maxWidth ? props.maxWidth : width - 40,
              },
            ]}
          >
            {props.name}
          </Text>
          {props.descriptiveText ? (
            <View style={[styles.descriptiveContainer, {}]}>
              <Text
                numberOfLines={2}
                style={[
                  styles.descriptiveText,
                  {
                    maxWidth: props.descriptiveMaxWidth
                      ? props.descriptiveMaxWidth
                      : 180,
                    fontSize: !props.descriptiveTextSize
                      ? 14
                      : props.descriptiveTextSize,
                  },
                ]}
              >
                {props.descriptiveText}
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};
