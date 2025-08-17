import { View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigators/RootNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [8000]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <RootNavigation />
    </View>
  );
};

export default App;
