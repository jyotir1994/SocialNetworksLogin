import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Login extends Component {
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