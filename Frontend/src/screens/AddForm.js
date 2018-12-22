import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class AddForm extends Component {
 

  render() {
    return (
      <View>
        <Text style={styles.homeContainer}> Add form test</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    homeContainer: {
    //   flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });