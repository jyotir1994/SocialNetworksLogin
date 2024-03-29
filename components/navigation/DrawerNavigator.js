import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import FbShare from '../screens/FbShare'
import fbHomeScreen from '../screens/FacebookHomeScreen';

const FacebookNavigator = createStackNavigator({
    FbHomeScreen: { screen: fbHomeScreen },
    Share: { screen: FbShare },
});

const DrawerNavigator = createDrawerNavigator(
    {
        // Home: {screen: HomeScreen},
        Facebook: {
            screen: FacebookNavigator,
            // navigationOptions: {
            //     drawerLabel: 'Cab'
            // },
        },

    },
    //   {
    //     contentComponent: props => <Logout {...props} />,
    //   },
);

export default DrawerNavigator;
