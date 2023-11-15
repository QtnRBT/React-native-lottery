import React from 'react';
import { Button, Text, View } from 'react-native';

import {
  useAccount,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWalletClient,
} from 'wagmi';
import abi from '../abi.json';

import { theme } from '../theme.config.json';
import { ethers } from 'ethers';

function EventsPage() {
  const account = useAccount();

  const { data } = useContractRead({
    abi: abi,
    address: `0x4d4d7AbBf568173fdd5D76dCD2Bd4d4af0d06a0f`,
    functionName: 'getLotteryId',
    account: account.address,
  });

  const preparedContract = usePrepareContractWrite({
    address: '0x4d4d7AbBf568173fdd5D76dCD2Bd4d4af0d06a0f',
    abi: abi,
    functionName: 'enter',
    account: account.address,
    value: ethers.parseEther('0.01'),
    onSuccess: (data) => {
      console.log(data.result);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { write } = useContractWrite(preparedContract.config);

  return (
    <View
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Lotterie N°{Number(data)}
      </Text>
      <Button title='Acheter un ticket' onPress={write}></Button>
    </View>
  );
}

export default EventsPage;
