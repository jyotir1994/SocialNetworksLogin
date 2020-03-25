import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
          <Icon name="navicon" size={30} color="#900" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 15,
    // borderRadius: 30,
    // width: 60,
    // height: 60,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});

export default withNavigation(DrawerTrigger);
