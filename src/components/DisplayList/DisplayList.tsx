import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { chunkArray } from "@/miscellaneous";

type DisplayListProps<T> = {
  array?: T[];
  chunkSize?: number | 2;
  renderItem?: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T, index: number) => string;
};

export const DisplayList = <T,>({
  array,
  renderItem,
  ...props
}: DisplayListProps<T>) => {
  const chunkedArray = chunkArray(array, props.chunkSize || 2);

  return (
    <FlatList
      data={chunkedArray}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item: nested }) => {
        return (
          <FlatList
            data={nested}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
            scrollEnabled={false}
            keyExtractor={props.keyExtractor}
            renderItem={({ item, index }) => <>{renderItem(item, index)}</>}
          />
        );
      }}
    />
  );
};
