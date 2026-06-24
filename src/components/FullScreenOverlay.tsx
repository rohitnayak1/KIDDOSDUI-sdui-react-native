import React from "react";
import { View } from "react-native";

interface Props {
  animation_url: string;
}

const FullScreenOverlay = ({
  animation_url,
}: Props) => {
  if (!animation_url) {
    return null;
  }

  return (
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};

export default FullScreenOverlay;