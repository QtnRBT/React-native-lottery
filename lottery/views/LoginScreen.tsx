import {
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { theme } from "../theme.config.json";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";

function LoginScreen() {

  const { isConnected, open } = useWalletConnectModal();

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
        <Image source={require("../assets/Letho.png")}></Image>
        <Text
          style={{
            fontSize: Number(theme.sizing["text-xl"]),
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Letho
        </Text>
      </View>
      <TouchableWithoutFeedback
        style={{
          backgroundColor: "#FFBE85",
        }}
        onPress={() => {
          open();
        }}
      >
        <View style={{
          flexDirection: "row",
          backgroundColor: "#FFBE85",
          borderRadius: 15,
          alignItems: "center",
        }}>
          <Image source={require("../assets/MetaMask_Fox.svg.png")} style={{
            width: 50,
            height: 50,
          }}></Image>
          <Text style={{
            marginLeft: 10,
          }}>Connexion avec MetaMask</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default LoginScreen;
