import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HeaderBackButton } from "@react-navigation/elements";
import { HeaderNavBarStyle as styles } from "./Styies";
import { Ionicons } from "@expo/vector-icons";
interface Props {
  onBackPress?: () => any;
  onEllipsisPress?: () => any;
  tintColor?: string;
  ellipsisColor?: string;
}

export const HeaderNavBar: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBackButton
        onPress={props.onBackPress}
        tintColor={!props.tintColor ? "black" : props.tintColor}
        style={styles.backContainer}
      />
      <TouchableOpacity
        onPress={props.onEllipsisPress}
        style={styles.ellipsisContainer}
      >
        <Ionicons
          name="ellipsis-horizontal-circle-outline"
          size={24}
          color={!props.ellipsisColor ? "black" : props.ellipsisColor}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
