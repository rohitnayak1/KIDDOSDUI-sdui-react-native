import React, {
  useCallback,
} from "react";

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { handleAction } from "../actions/ActionDispatcher";

interface Props {
  title: string;
  image: string;
  action?: any;
}

const BannerHero = ({
  title,
  image,
  action,
}: Props) => {
  const onPress = useCallback(() => {
    handleAction(action);
  }, [action]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(
  BannerHero
);

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 14,
  },

  title: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
  },
});