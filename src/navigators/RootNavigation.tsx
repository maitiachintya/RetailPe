import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootMainStackParamList } from '../types/index';
import TabNavigation from './BottomTabNav';

// Create navigation ref
export const navigationRef =
  createNavigationContainerRef<RootMainStackParamList>();

const Stack = createNativeStackNavigator<RootMainStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        {/* Add more stack screens here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
