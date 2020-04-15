import React, { Component } from 'react';
 
import { Platform, View, Text, StyleSheet, Share, TextInput, Button, Alert } from 'react-native';
 
import Share from 'react-native-share';
export default class Myapp extends Component<{}>
{
    constructor()
    {
        super();
 
        this.state = 
          { 
 
            TextInputValueHolder: ''
 
          }
    }
 
    ShareMessage=()=>
    {
            Share.share(
            {
                
              message: this.state.TextInputValueHolder.toString(),
              // social: Share.Social.LINKEDIN
            
            }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
    }

    shareOptions =  {
      title: 'Share via',
      message: 'some message',
      url: 'https://github.com/react-native-community/react-native-share',
      social: Share.Social.LINKEDIN,
      // whatsAppNumber: "9199999999",  // country code + phone number
      filename: 'test' , // only for base64 file in Android 
  };
  shares=() => Share.shareSingle(shareOptions);
 
    render()
    {
        return(
 
          <View style = { styles.MainContainer }>
 
              <TextInput 
                underlineColorAndroid = "transparent" 
                placeholder="Enter Text Here To Share"
                style = { styles.TextInputStyle } 
                onChangeText = { ( TextInputText ) => { this.setState({ TextInputValueHolder: TextInputText })} } 
              />
 
              <Button 
              title="Click Here To Share TextInput Inside Typed Text as Message" 
              onPress={ this.shares } />
              
 
          </View>
        
      );
    }
}
 
const styles = StyleSheet.create(
{  
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        margin:10
    },
 
    TextInputStyle:
    {
        borderWidth: 1,
        borderColor: '#009688',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
});