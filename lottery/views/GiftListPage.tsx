import React from "react";
import Card from "../components/GiftCard.tsx";
import LastCard from "../components/LastGiftCard.tsx";

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
      }}
    >
      <Text
        style={{
          fontSize: 35,
          marginHorizontal: 20,
        }}
      >
        À récupérer
      </Text>
      <LastCard
        title="Reception"
        content="20 Juillet         Mairie"
        title2="Produit"
        content2="Produit"
        imageSource={require("../assets/Letho.png")}
      />
      <Text
        style={{
          alignSelf: "center",
          fontSize: 35,
        }}
      >
        Dernier Cadeaux{" "}
      </Text>
      <Card
        title="   Dates                 Produit"
        content="     il y a 37 jours                   Produit"
        imageSource={require("../assets/Letho.png")}
      />
      <Card
        title="   Dates                 Produit"
        content="     il y a 37 jours                   Produit"
        imageSource={require("../assets/Letho.png")}
      />
      <Card
        title="   Dates                 Produit"
        content="     il y a 37 jours                   Produit"
        imageSource={require("../assets/Letho.png")}
      />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>
    </SafeAreaView>
  );
}

export default GiftListPage;
