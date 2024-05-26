import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { HeaderBackButton } from "@react-navigation/elements";
import { Fonts, useInitialFonts } from "@/utils/hooks";

const { width } = Dimensions.get("window");

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  height?: number;
  hideBack?: boolean;
}

export const HeaderTop: React.FC<Props> = ({
  title,
  style,
  backgroundColor,
  height,
  hideBack = false,
}: Props) => {
  const FontLoaded = useInitialFonts();
  const font = FontLoaded ? Fonts.Circular : null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ? backgroundColor : "#000",
          height: !height ? 110 : height,
        },
      ]}
    >
      <SafeAreaView
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
          },
          style,
        ]}
      >
        <View style={[styles.backButtonContainer]}>
          {hideBack ? <></> : <HeaderBackButton />}
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, { fontFamily: font }]}>{title}</Text>
        </View>
        <View style={styles.placeholder} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "black",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  backButtonContainer: {
    flex: 1,
    alignItems: "flex-start",

    margin: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  placeholder: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
