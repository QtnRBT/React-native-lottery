import React from "react";
import { Text, View } from "react-native";
import { useAccount, useBalance } from "wagmi";
import { W3mAccountButton } from "@web3modal/wagmi-react-native/";

export function Balance() {
  const account = useAccount();
  const balance = useBalance(account);
  const balanceValue = balance.data?.value;
  return (
    <View>
      <Text style={{
        marginTop: 150,
      }}>{String(balance.data?.value)}</Text>
      <W3mAccountButton />
    </View>
  );
}
