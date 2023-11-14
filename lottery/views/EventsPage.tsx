import React, { useState } from "react";
import { Text, View } from "react-native";

import { theme } from "../theme.config.json";

import { JsonRpcProvider, Contract } from "ethers";

function EventsPage() {

  // const contractAddress = "0xEeB3D9c75eF53b92a5BaCd8BeeFd8d7f371442eA";
  // const contractABI = [
  //   {
  //     inputs: [],
  //     stateMutability: "nonpayable",
  //     type: "constructor",
  //   },
  //   {
  //     inputs: [],
  //     name: "enter",
  //     outputs: [],
  //     stateMutability: "payable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "getPlayers",
  //     outputs: [
  //       {
  //         internalType: "address payable[]",
  //         name: "",
  //         type: "address[]",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "getPotBalance",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "getRandomNumber",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "lottery",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "getWinnerByLottery",
  //     outputs: [
  //       {
  //         internalType: "address payable",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "lotteryHistory",
  //     outputs: [
  //       {
  //         internalType: "address payable",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "lotteryId",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "owner",
  //     outputs: [
  //       {
  //         internalType: "address payable",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "pickWinner",
  //     outputs: [],
  //     stateMutability: "payable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "players",
  //     outputs: [
  //       {
  //         internalType: "address payable",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  // ];

  // const [lotteryContract, setlotteryContract] = useState<any>(null);

  // const provider = new JsonRpcProvider("https://rpc.sepolia.org");
  // const contract = new Contract(contractAddress, contractABI, provider);

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
