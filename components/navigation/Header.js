import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DrawerTrigger from './DrawerTigger'

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <DrawerTrigger />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white'
  }
});

export default Header;
