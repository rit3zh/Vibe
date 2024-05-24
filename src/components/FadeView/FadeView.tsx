import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle, StyleProp, Text } from "react-native";
interface FadeProps {
  visible: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  onAnimationComplete?: () => void;
  [key: string]: any;
}

export const Fade: React.FC<FadeProps> = ({
  visible,
  style,
  children,
  onAnimationComplete,
  ...rest
}) => {
  const visibility = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(visibility, {
      toValue: visible ? 1 : 0,
      duration: 250, // Faster duration for quicker fade animation
      useNativeDriver: true,
    }).start(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });
  }, [visible]);

  const containerStyle: Animated.WithAnimatedObject<ViewStyle> = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const combinedStyle = [containerStyle, style];

  return (
    <Animated.View style={combinedStyle} {...rest}>
      {children}
    </Animated.View>
  );
};
