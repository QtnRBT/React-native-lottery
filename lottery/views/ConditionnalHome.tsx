import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainBottomTabs from '../components/MainBottomTabs';
import LoginScreen from '../views/LoginScreen';

import { useAccount } from 'wagmi';

function ConditionnalHome() {
  const account = useAccount();

  return (
    <>
      {account.isConnected ? (
        <NavigationContainer>
          <MainBottomTabs />
        </NavigationContainer>
      ) : (
        <LoginScreen />
      )}
    </>
  );
}

export default ConditionnalHome;
