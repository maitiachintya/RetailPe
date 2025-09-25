// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import RetailPe from '../../screens/RetailPe';
// import BillPayment from '../../screens/BillPayment';
// import Insurance from '../../screens/Insurance';
// import MutualFund from '../../screens/MutualFund';
// import { RootMainTabParamList } from '../../types';
// import { View } from 'react-native';
// import { Icons } from '../../themes/Icons';

// const Tab = createBottomTabNavigator<RootMainTabParamList>();

// export default function TabNavigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => {
//           let IconComponent: React.FC<any> | null = null;

//           switch (route.name) {
//             case 'RetailPe':
//               IconComponent = Icons.retailPe;
//               break;
//             case 'BillPayment':
//               IconComponent = Icons.billPayment;
//               break;
//             case 'Insurance':
//               IconComponent = Icons.insurance;
//               break;
//             case 'MutualFund':
//               IconComponent = Icons.mutualFund;
//               break;
//           }

//           const iconSize = 30;
//           const iconColor = focused ? '#6819E6' : 'gray';

//           return IconComponent ? (
//             <IconComponent width={size} height={iconSize} stroke={iconColor} />
//           ) : (
//             <View />
//           );
//         },
//         tabBarActiveTintColor: '#6819E6',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           height: 80,
//           paddingBottom: 10,
//           paddingTop: 10,
//           backgroundColor: '#fff',
//           shadowColor: 'black',
//           shadowOffset: {
//             width: 0,
//             height: 6,
//           },
//           shadowOpacity: 1,
//           shadowRadius: 10,
//           elevation: 8,
//         },
//         borderTopWidth: 8,
//         borderTopColor: 'rgba(0,0,0,0.1)',
//         tabBarLabelStyle: {
//           fontSize: 12,
//         },
//       })}
//     >
//       <Tab.Screen
//         name="RetailPe"
//         component={RetailPe}
//         options={{ tabBarLabel: 'Retail Pe' }}
//       />
//       <Tab.Screen
//         name="BillPayment"
//         component={BillPayment}
//         options={{ tabBarLabel: 'Bill Payment' }}
//       />
//       <Tab.Screen
//         name="Insurance"
//         component={Insurance}
//         options={{ tabBarLabel: 'Insurance' }}
//       />
//       <Tab.Screen
//         name="MutualFund"
//         component={MutualFund}
//         options={{ tabBarLabel: 'Mutual Fund' }}
//       />
//     </Tab.Navigator>
//   );
// }


//it

import React, { useState } from 'react';
import { Dimensions, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import RetailPe from '../../screens/RetailPe';
import BillPayment from '../../screens/BillPayment';
import Insurance from '../../screens/Insurance';
import MutualFund from '../../screens/MutualFund';
import { Icons } from '../../themes/Icons';

const initialLayout = { width: Dimensions.get('window').width };

export default function TabNavigation() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'RetailPe', title: 'Retail Pe', icon: Icons.retailPe },
    { key: 'BillPayment', title: 'Bill Payment', icon: Icons.billPayment },
    { key: 'Insurance', title: 'Insurance', icon: Icons.insurance },
    { key: 'MutualFund', title: 'Mutual Fund', icon: Icons.mutualFund },
  ];

  const renderScene = SceneMap({
    RetailPe: RetailPe,
    BillPayment: BillPayment,
    Insurance: Insurance,
    MutualFund: MutualFund,
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Swipeable screens */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        swipeEnabled
        renderTabBar={() => null} // hide default top tabs
      />

      {/* Custom bottom tab bar */}
      <View style={styles.tabBar}>
        {routes.map((r, i) => {
          const IconComponent = r.icon;
          const focused = index === i;
          const color = focused ? '#6819E6' : 'gray';

          return (
            <TouchableOpacity
              key={r.key}
              style={styles.tabItem}
              onPress={() => setIndex(i)}
            >
              <IconComponent width={28} height={28} stroke={color} />
              <Text style={[styles.label, { color }]}>{r.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff',
    elevation: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});
