import { StyleSheet } from "react-native";

import { ethers } from "ethers";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from "./components/MainBottomTabs";
import LoginScreen from "./views/LoginScreen";

const projectId = "439a5979994e336a7919f88235b11ce3";

const providerMetadata = {
  name: "Letho",
  description: "An app for a lottery",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  // Add in the useWalletConnectModal hook + props
  const { isConnected } = useWalletConnectModal();

  // Main UI Render
  return (
    <NavigationContainer>
      <WalletConnectModal {...{ projectId, providerMetadata }} />
      {isConnected ? <MainBottomTabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});
