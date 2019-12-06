import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';



const appSwitch = createSwitchNavigator({
  Auth: {
    screen: LoginScreen
  }
})

export default AppNavigator = createAppContainer(appSwitch);