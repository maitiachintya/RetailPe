import { View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigators/RootNavigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 6000); // hide splash after 6 seconds
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'transparent'}
        hidden
        barStyle={'dark-content'}
      />
      <RootNavigation />
    </View>
  );
};

export default App;
