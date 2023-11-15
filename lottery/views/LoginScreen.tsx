import {
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Button,
  StyleSheet
} from 'react-native';

import { theme } from '../theme.config.json';

import { useWeb3Modal } from '@web3modal/wagmi-react-native';

function LoginScreen() {
  const { open } = useWeb3Modal();

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: Number(theme.spacing.paddingVerticalHeader),
      }}
    >
      <View></View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={require('../assets/Letho.png')}></Image>
        <Text
          style={{
            fontSize: Number(theme.sizing['text-xl']),
            fontWeight: 'bold',
            marginTop: 20,
          }}
        >
          Letho
        </Text>
      </View>
      <Button title="Connexion au web3" onPress={open}></Button>
    </SafeAreaView>
  );
}

export default LoginScreen;
