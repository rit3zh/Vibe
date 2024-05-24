import { View, FlatList } from "react-native";
import React, { useState, useRef, useEffect, useCallback } from "react";
import * as Constants from "@/utils/constants/index";
import { SampleStyle as styles } from "@/screen/styles/pages/sample-screen/Sample";
import { MusicShorts } from "@/components/index";
import { useFocusEffect } from "@react-navigation/native";
import TrackPlayer from "react-native-track-player";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export function SampleScreen({ navigation }: NativeStackHeaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const handleVideoEnd = useCallback(() => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= Constants.EXPLORE_MORE_SAMPLE.length) {
      nextIndex = 0; // Loop back to the start
    }
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
  }, [currentIndex]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        TrackPlayer.stop();
        setCurrentIndex(0);
      };
    }, [])
  );

  useEffect(() => {
    if (flatListRef.current && currentIndex !== null) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        ref={flatListRef}
        data={Constants.EXPLORE_MORE_SAMPLE}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{}}
        pagingEnabled
        renderItem={({ item, index }) => (
          <MusicShorts
            {...item}
            index={index}
            onBackPress={() => navigation.goBack()}
            isPlaying={index === currentIndex}
            onEnd={handleVideoEnd}
            audioUrl={item.url}
            info={{
              ...item,
            }}
          />
        )}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
