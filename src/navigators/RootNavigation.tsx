import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootMainStackParamList } from '../types/index';
import TabNavigation from './BottomTabNav';
import PanVerification from '../screens/PanVerification';
import BusinessVerification from '../screens/BusinessVerification';
import LoanApplied from '../screens/LoanApplied';
import LoanDashboard from '../screens/LoanDashboard';
import AccountStatement from '../screens/AccountStatement';

// Create navigation ref
export const navigationRef =
  createNavigationContainerRef<RootMainStackParamList>();

const Stack = createNativeStackNavigator<RootMainStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name='PanVerification' component={PanVerification}/>
        <Stack.Screen name='BusinessVerification' component={BusinessVerification} />
        <Stack.Screen name='LoanApplied' component={LoanApplied}/>
        <Stack.Screen name='LoanDashboard' component={LoanDashboard}/>
        <Stack.Screen name='AccountStatement' component={AccountStatement}/>
        {/* Add more stack screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
