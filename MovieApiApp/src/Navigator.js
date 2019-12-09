import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import ResultsScreen from './screens/ResultsScreen';


const appSwitch = createSwitchNavigator({
  Auth: {
    screen:LoginScreen
  },
   Results: {
    screen: ResultsScreen
  }
})

export default AppNavigator = createAppContainer(appSwitch);