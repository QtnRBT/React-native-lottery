import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { theme } from "../theme.config.json";

import { Contract, BaseContract, AlchemyProvider } from "ethers";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

function EventsPage() {
  // const [baseContract, setBaseContract] = useState<BaseContract | null>(null);

  // useEffect(() => {
  //   const handleConnection = async () => {
  //     const connector = useWalletConnect();

  //     if (!connector.connected) {
  //       await connector.connect();
  //     }

  //     const provider = new AlchemyProvider(connector);
  //     const signer = await provider.getSigner();

  //     const contractAddress = "0x05f37fd91676a73c6d02f7E6d13286EEE9f51b80";
  //     const contractABI = [
  //       { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  //       {
  //         inputs: [],
  //         name: "enter",
  //         outputs: [],
  //         stateMutability: "payable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getOwner",
  //         outputs: [{ internalType: "address", name: "", type: "address" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getPlayers",
  //         outputs: [
  //           { internalType: "address payable[]", name: "", type: "address[]" },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getPotBalance",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "getRandomNumber",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           { internalType: "uint256", name: "lottery", type: "uint256" },
  //         ],
  //         name: "getWinnerByLottery",
  //         outputs: [
  //           { internalType: "address payable", name: "", type: "address" },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         name: "lotteryHistory",
  //         outputs: [
  //           { internalType: "address payable", name: "", type: "address" },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "lotteryId",
  //         outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "owner",
  //         outputs: [
  //           { internalType: "address payable", name: "", type: "address" },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "pickWinner",
  //         outputs: [],
  //         stateMutability: "payable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //         name: "players",
  //         outputs: [
  //           { internalType: "address payable", name: "", type: "address" },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //     ];
  //     const contract = new Contract(contractAddress, contractABI, signer);
  //     setBaseContract(contract);
  //     console.log(contract);
  //   };

  //   handleConnection();
  // }, []);

  // const handleGetOwner = () => {
  //   contract.getOwner().then((data) => console.log(data));
  // };

  const handleEnter = async () => {};

  // console.log(contract);
  return (
    <View
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
      }}
    >
      <Text>This is an event page</Text>
      {/* <Button title="Get owner" onPress={handleGetOwner}></Button> */}
    </View>
  );
}

export default EventsPage;
