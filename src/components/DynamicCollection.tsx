import React, {
  useCallback,
} from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { FlashList } from "@shopify/flash-list";

import ProductCard from "./ProductCard";

interface Props {
  title: string;
  products: any[];
}

const DynamicCollection = ({
  title,
  products,
}: Props) => {
  const renderItem =
    useCallback(
      ({ item }: any) => (
        <ProductCard
          product={item}
        />
      ),
      []
    );

  const keyExtractor =
    useCallback(
      (item: any) =>
        item.id,
      []
    );

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <FlashList
        horizontal
        nestedScrollEnabled
        data={products}
        renderItem={
          renderItem
        }
        keyExtractor={
          keyExtractor
        }
        showsHorizontalScrollIndicator={
          false
        }
      />
    </View>
  );
};

export default React.memo(
  DynamicCollection
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 12,
    marginBottom: 10,
  },
});