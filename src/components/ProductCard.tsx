import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { handleAction } from "../actions/ActionDispatcher";
import { useTheme } from "../hooks/useTheme";

interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
}

const ProductCard = ({ product }: Props) => {
  const theme = useTheme();

  const onAddToCart = useCallback(() => {
    handleAction({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
      },
    });
  }, [product.id]);

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        ₹{product.price}
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              theme.primary,
          },
        ]}
        onPress={onAddToCart}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "700",
          }}
        >
          Add To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ProductCard);

const styles = StyleSheet.create({
  card: {
    width: 160,
    padding: 10,
    margin: 8,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },

  name: {
    marginTop: 8,
    fontWeight: "600",
  },

  price: {
    marginVertical: 6,
    fontWeight: "700",
  },

  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});