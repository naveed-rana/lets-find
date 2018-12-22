import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class Home extends Component {
 

  render() {
    return (
      <View>
        <Text style={styles.homeContainer}> Home </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    homeContainer: {
    //   flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    }
  });