import React from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import ProductCard from "./ProductCard";

interface Props {
  products: any[];
}

const ProductGrid2x2 = ({
  products,
}: Props) => {
  return (
    <View style={styles.grid}>
      {products.map(
        (product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      )}
    </View>
  );
};

export default React.memo(
  ProductGrid2x2
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:
      "space-evenly",
    marginBottom: 20,
  },
});