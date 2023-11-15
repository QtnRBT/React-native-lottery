import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, Text, TouchableOpacity } from 'react-native';

import { Home } from 'lucide-react-native';
import { Gift } from 'lucide-react-native';
import { UserCircle2 } from 'lucide-react-native';
import { Bell } from 'lucide-react-native';

import { theme } from '../theme.config.json';

const Tab = createBottomTabNavigator();

import EventsPage from '../views/EventsPage';
import GiftListPage from '../views/GiftListPage';
import ProfilePage from '../views/ProfilePage';
import { View } from 'react-native';
import { W3mAccountButton } from '@web3modal/wagmi-react-native';

function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        header: () => (
          <View
            style={{
              paddingVertical: Number(theme.spacing.paddingVerticalHeader),
              paddingHorizontal: Number(theme.spacing.paddingHorizontal),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={require('../assets/Letho.png')}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontSize: Number(theme.sizing['text-xl']),
                  fontWeight: 'bold',
                }}
              >
                Letho
              </Text>
            </View>
            <W3mAccountButton />
          </View>
        ),
      }}
    >
      <Tab.Screen
        name='Gifts'
        component={GiftListPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Gift size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name='Events'
        component={EventsPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Home size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <UserCircle2 size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainBottomTabs;
