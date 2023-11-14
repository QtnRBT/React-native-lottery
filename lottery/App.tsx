import "@walletconnect/react-native-compat";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from "./components/MainBottomTabs";
import LoginScreen from "./views/LoginScreen";

import { Balance } from "./Balance";

import { Text } from "react-native";

import { sepolia } from "viem/chains";
import {
  defaultWagmiConfig,
  createWeb3Modal,
} from "@web3modal/wagmi-react-native";
import { WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/wagmi-react-native/";

export default function App() {
  // 1. Get projectId
  const projectId = "439a5979994e336a7919f88235b11ce3";

  // 2. Create config
  const metadata = {
    name: "Web3Modal RN",
    description: "Web3Modal RN Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
    redirect: {
      native: "YOUR_APP_SCHEME://",
      universal: "YOUR_APP_UNIVERSAL_LINK.com",
    },
  };

  const chains = [sepolia];

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  // 3. Create modal
  createWeb3Modal({
    projectId,
    chains,
    wagmiConfig,
  });
  // Main UI Render
  return (
    <WagmiConfig config={wagmiConfig}>
      <Balance></Balance>
      <Web3Modal />
    </WagmiConfig>
  );
}
