import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { LoginButton, AccessToken, ShareDialog } from 'react-native-fbsdk';
import AppNavigator from './components/navigation/AppNavigator';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    AppNavigator: {
      screen: AppNavigator,
      navigationOptions: {
        title: 'AppNavigator',
        header: null, //this will hide the header
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />
  }
}