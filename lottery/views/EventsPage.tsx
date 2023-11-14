import React, { useState } from "react";
import { Text, View } from "react-native";

import { theme } from "../theme.config.json";

import { JsonRpcProvider, Contract } from "ethers";

function EventsPage() {
  const contractAddress = "0x05f37fd91676a73c6d02f7E6d13286EEE9f51b80";
  const contractABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      inputs: [],
      name: "enter",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getOwner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPlayers",
      outputs: [
        { internalType: "address payable[]", name: "", type: "address[]" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPotBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRandomNumber",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "lottery", type: "uint256" }],
      name: "getWinnerByLottery",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "lotteryHistory",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lotteryId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pickWinner",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "players",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
  ];

  const [lotteryContract, setlotteryContract] = useState<any>(null);

  const provider = new JsonRpcProvider("https://rpc.sepolia.org");
  const contract = new Contract(contractAddress, contractABI, provider);

  const data = contract.getOwner().then((data) => console.log(data));

  // console.log(contract);
  return (
    <View
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
      }}
    >
      <Text>This is an event page</Text>
    </View>
  );
}

export default EventsPage;
