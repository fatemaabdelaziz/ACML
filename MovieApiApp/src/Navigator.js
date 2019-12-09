import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import ResultsScreen from './screens/ResultsScreen';

const HomeStack = createStackNavigator({
  Search: {
    screen: SearchScreen
  },
  Results: {
    screen: ResultsScreen
  }
})

const appSwitch = createSwitchNavigator({
  Auth: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeStack
  }
})

export default AppNavigator = createAppContainer(appSwitch);