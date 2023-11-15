import React from "react";

import {
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { theme } from "../theme.config.json";

function GiftListPage() {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        paddingVertical: Number(theme.spacing.paddingVerticalHeader),
      }}
    >
      <View></View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <Image source={require("../assets/Gifts.png")} style={{
            width: 400,
            height: 600,
          }}></Image>
      </View>
    </SafeAreaView>
  );
}

export default GiftListPage;
