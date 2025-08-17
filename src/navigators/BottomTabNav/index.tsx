import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RetailPe from '../../screens/RetailPe';
import BillPayment from '../../screens/BillPayment';
import Insurance from '../../screens/Insurance';
import MutualFund from '../../screens/MutualFund';
import { RootMainTabParamList } from '../../types';
import { View } from 'react-native';
import { Icons } from '../../themes/Icons';

const Tab = createBottomTabNavigator<RootMainTabParamList>();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent: React.FC<any> | null = null;

          switch (route.name) {
            case 'RetailPe':
              IconComponent = Icons.retailPe;
              break;
            case 'BillPayment':
              IconComponent = Icons.billPayment;
              break;
            case 'Insurance':
              IconComponent = Icons.insurance;
              break;
            case 'MutualFund':
              IconComponent = Icons.mutualFund;
              break;
          }

          const iconSize = 30;
          const iconColor = focused ? '#6819E6' : 'gray';

          return IconComponent ? (
            <IconComponent width={size} height={iconSize} stroke={iconColor} />
          ) : (
            <View />
          );
        },
        tabBarActiveTintColor: '#6819E6',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: '#fff',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 8,
        },
        borderTopWidth: 8,
        borderTopColor: 'rgba(0,0,0,0.1)',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="RetailPe"
        component={RetailPe}
        options={{ tabBarLabel: 'Retail Pe' }}
      />
      <Tab.Screen
        name="BillPayment"
        component={BillPayment}
        options={{ tabBarLabel: 'Bill Payment' }}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{ tabBarLabel: 'Insurance' }}
      />
      <Tab.Screen
        name="MutualFund"
        component={MutualFund}
        options={{ tabBarLabel: 'Mutual Fund' }}
      />
    </Tab.Navigator>
  );
}
