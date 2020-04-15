import React, { Component } from 'react';
import { View, Button, Linking } from 'react-native';
import LinkedInModal from 'react-native-linkedin';
import Header from '../navigation/Header';


export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: 'LinkedIn',
      //Heading style
      headerTitleStyle: { alignSelf: 'center' },
    //   headerRight: () => <HeaderRightWithBack />,
      headerLeft: () => <Header />
    };
  };
    render() {
      const { navigate } = this.props.navigation;
      return <View style={{flex: 1, flexDirection: 'column', padding: 5}}>
        <LinkedInModal
          shouldGetAccessToken={false}
          clientSecret='Yq9hW0s4IVMpYMhY'
          clientID="81gi0vxssv9vyc"
          redirectUri="https://www.google.com/"
          onSuccess={token => console.log(token)}
        />
        <Button title='Share' onPress={() => Linking.openURL("https://www.linkedin.com/shareArticle?mini=true&summary=youtube&title=f1&url=https://www.google.com/")}></Button>
      </View>
    }
  }