import { View, Text, ViewStyle, ViewProps, StyleProp } from "react-native";
import React from "react";
import { LoaderStyle as styles } from "./LoaderStyles";
import LoaderKit from "react-native-loader-kit";
import { Fade } from "../FadeView/FadeView";
import Animated, { FadeIn } from "react-native-reanimated";

interface Props {
  visible: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export const Loader: React.FC<Props> = ({
  visible,
  children,
  style,
}: Props) => {
  return (
    <React.Fragment>
      <Fade style={style} visible={visible}>
        <LoaderKit
          style={{ width: 60, height: 60 }}
          name={"BallTrianglePath"}
          color={"#cfcfcf"}
        />
      </Fade>
      {!visible ? (
        <Animated.View entering={FadeIn}>{children}</Animated.View>
      ) : null}
    </React.Fragment>
  );
};
