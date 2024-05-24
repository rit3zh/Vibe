import React, { ReactNode } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Appearance,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Theme } from "@/shared/styles/theme";

type GradientProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  theme?: "light" | "dark";
};

export const GradientView: React.FC<GradientProps> = ({
  children,
  style,
  theme = Appearance.getColorScheme(),
}) => {
  return (
    <SafeAreaView style={style}>
      <LinearGradient
        colors={
          theme === "light"
            ? Theme.light.backgroundColorCode
            : Theme.dark.backgroundColorCode
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </SafeAreaView>
  );
};
