import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import React from "react";
interface Props<T> {
  data: T[];
  renderContent?: (data: T) => JSX.Element | React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export const AnimatedFlatList = <T,>({
  data,
  renderContent,
  style,
}: Props<T>) => {
  const _id = () => "id" + Math.random().toString(16).slice(2);

  const renderItem: ListRenderItem<T> | null | undefined = ({
    item,
    index,
  }) => (
    <React.Fragment>
      <Animated.View entering={FadeInDown.duration(500)}>
        {renderContent(item)}
      </Animated.View>
    </React.Fragment>
  );

  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      keyExtractor={() => _id()}
      renderItem={renderItem}
    />
  );
};
