import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import { theme } from '../theme.config.json';

import TicketComponent from '../components/TicketComponent';

import { useAccount, useDisconnect, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi';

import abi from '../abi.json';
import { useNavigation } from '@react-navigation/native';

function ProfilePage() {
  const account = useAccount();
  const disconnect = useDisconnect();
  const navigation = useNavigation();

  const [participants, setParticipants] = useState<String[]>([]);
  const [owner, setOwner] = useState<String>('');

  const { data } = useContractRead({
    address: `0x4d4d7AbBf568173fdd5D76dCD2Bd4d4af0d06a0f`,
    abi: abi,
    functionName: 'getPlayers',
    account: account.address,
  });

  const { data: ownerData } = useContractRead({
    address: `0x4d4d7AbBf568173fdd5D76dCD2Bd4d4af0d06a0f`,
    abi: abi,
    functionName: 'getOwner',
    account: account.address,
  });

  const pickWinnerPreparation = usePrepareContractWrite({
    address: `0x4d4d7AbBf568173fdd5D76dCD2Bd4d4af0d06a0f`,
    abi: abi,
    functionName: 'pickWinner',
    account: account.address,
    onSuccess: (data) => {
      console.log(data.result);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { write: pickWinner } = useContractWrite(pickWinnerPreparation.config);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus');
    })
    if (data === undefined) return;
    setParticipants(data as String[]);

    if (ownerData === undefined) return;
    setOwner(ownerData as String);
  }, []);

  const amountOfTimesInLottery = participants.filter((participant) => {
    return participant === account.address;
  });

  return (
    <ScrollView
      style={{
        paddingHorizontal: Number(theme.spacing.paddingHorizontal),
      }}
    >
      <Text>{account.address}</Text>
      <Text>{owner}</Text>
      {account.address?.toString() == owner ? (
        <Button title='Faire le tirage au sort' onPress={pickWinner}></Button>
      ) : ''}
      {amountOfTimesInLottery.map(() => (
        <TicketComponent />
      ))}
      <Button
        title='Se déconnecter'
        onPress={() => disconnect.disconnect()}
      ></Button>
    </ScrollView>
  );
}

export default ProfilePage;
