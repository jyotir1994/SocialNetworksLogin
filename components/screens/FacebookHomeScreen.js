import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Header from '../navigation/Header';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: 'Facebook',
      //Heading style
      headerTitleStyle: { alignSelf: 'center' },
    //   headerRight: () => <HeaderRightWithBack />,
      headerLeft: () => <Header />
    };
  };

      render() {
        return (
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <Button
              style={{ fontSize: 20, color: 'green' }}
              styleDisabled={{ color: 'red' }}
              onPress={() => this.props.navigation.navigate('Share')}
              title="FB Share"
            >
              fb Share
    </Button>
    
    
          </View>
        );
      }
    };