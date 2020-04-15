import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import FbShare from '../screens/FbShare'
import fbHomeScreen from '../screens/FacebookHomeScreen';
import SignInFromGoogle from '../screens/SignInFromGoogle';
import LinkedInLogin from '../screens/LinkedInLogin';
import Share from '../screens/Share';

const FacebookNavigator = createStackNavigator({
    FbHomeScreen: { screen: fbHomeScreen },
    Share: { screen: FbShare },
});

const GoogleNavigator = createStackNavigator({
    SignInFromGoogle: { screen: SignInFromGoogle },
});

const LinkedInNavigator = createStackNavigator({
    LinkedIn: { screen: LinkedInLogin },
});

const ShareNavigator = createStackNavigator({
    Share: { screen: Share },
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
        SignInFromGoogle: { screen: GoogleNavigator },
        LinkedIn: { screen: LinkedInNavigator },
        Share: { screen: ShareNavigator},

    },
    //   {
    //     contentComponent: props => <Logout {...props} />,
    //   },
);

export default DrawerNavigator;
