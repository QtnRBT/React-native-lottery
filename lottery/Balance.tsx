import React from "react";
import { Text, View, Button } from "react-native";
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { W3mAccountButton } from "@web3modal/wagmi-react-native/";

import abi from "./abi.json";
import { parseEther } from "ethers";

export function Balance() {
  const account = useAccount();
  const balance = useBalance(account);

  const { config, error } = usePrepareContractWrite({
    address: `0x05f37fd91676a73c6d02f7E6d13286EEE9f51b80`,
    abi: abi,
    functionName: "enter",
    account: account.address,
    onSuccess: (data) => {
      console.log("oui",data);
    },
    onError: (error) => {
      console.log(error);
    },
    value: parseEther("0.01")
  });

  const { write } = useContractWrite(config);

  return (
    <View>
      <Text
        style={{
          marginTop: 150,
        }}
      >
        {String(balance.data?.value)}
      </Text>
      <Button title="connect to contract" onPress={() => write?.()}></Button>
      {error && (
        <Text>
          An error occurred preparing the transaction: {error.message}
        </Text>
      )}
      <W3mAccountButton />
    </View>
  );
}
