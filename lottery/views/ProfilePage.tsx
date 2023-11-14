import React from "react";
import { Text, View, Button } from "react-native";

import { theme } from "../theme.config.json";

import TicketComponent from "../components/TicketComponent";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";

function ProfilePage() {
  const { address, provider } = useWalletConnectModal();
  return (
    <View
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
      }}
    >
      <Text>{address}</Text>
      <TicketComponent></TicketComponent>
      <Button
        title="Se déconnecter"
        onPress={() => {
          return provider?.disconnect();
        }}
      ></Button>
    </View>
  );
}

export default ProfilePage;
