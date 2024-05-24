import { View, Text } from "react-native";
import React from "react";
import { AnimatedSegmentStyle as styles } from "./styles";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import Animated, { FadeInUp } from "react-native-reanimated";

interface Props {
  selectedIndex?: number;
  onValueChange?: (selectedValue?: string) => any | void;
  values?: string[];
}

export const AnimatedSegmentControl: React.FC<Props> = ({
  selectedIndex,
  onValueChange,
  values,
}: Props) => {
  // entering={FadeInUp.delay(500)}
  return (
    <Animated.View style={styles.container}>
      <SegmentedControl
        values={[...values]}
        selectedIndex={selectedIndex}
        onValueChange={onValueChange}
        style={styles.segmentControl}
        fontStyle={styles.font}
        activeFontStyle={styles.activeFont}
        tintColor="#8e8e8e"
        backgroundColor="#131313"
      />
    </Animated.View>
  );
};
