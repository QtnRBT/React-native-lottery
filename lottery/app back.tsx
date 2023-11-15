import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainBottomTabs from './components/MainBottomTabs';
import LoginScreen from './views/LoginScreen'; // Your login screen component
import { useWalletConnect } from '@walletconnect/react-native-dapp';

export default function App() {
  const connector = useWalletConnect();
  const [isConnected, setIsConnected] = useState(connector.connected);

  // Handle MetaMask connection
  const connectToMetaMask = useCallback(async () => {
    if (!connector.connected) {
      // Initiate connection
      await connector.connect();
      setIsConnected(true);
    }
  }, [connector]);

  // Check connection status on component mount and connector change
  useEffect(() => {
    setIsConnected(connector.connected);
  }, [connector]);

  // Handle logout
  const logout = () => {
    if (connector.connected) {
      connector.killSession();
      setIsConnected(false);
    }
  };

  return (
    <NavigationContainer>
      {isConnected ? <MainBottomTabs /> : <LoginScreen onLogin={connectToMetaMask} />}
    </NavigationContainer>
  );
}
