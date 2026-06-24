import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { cartStore } from "../store/cartStore";

const CartBadge = () => {
  const count = cartStore(
    (state) => state.count
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Cart: {count}
      </Text>
    </View>
  );
};

export default React.memo(
  CartBadge
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF5722",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },

  text: {
    color: "#fff",
    fontWeight: "700",
  },
});