import React from "react";
import { Text, View } from "react-native";

import { theme } from "../theme.config.json";

function GiftListPage() {
  return (
    <View
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
      }}
    >
      <Text>This is a gift page</Text>
    </View>
  );
}

export default GiftListPage;
