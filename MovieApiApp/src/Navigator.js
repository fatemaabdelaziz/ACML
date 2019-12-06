import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import r from './App'


const appSwitch = createSwitchNavigator({
  Auth: {
    screen:LoginScreen
  }
})

export default AppNavigator = createAppContainer(appSwitch);