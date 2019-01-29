import React, { Component } from 'react';
import { View,Image,StatusBar,StyleSheet} from 'react-native';

export default class SplashScreen extends Component {

  render() {
    return (
      <View style={styles.imageContainer}>
      <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
      <Image style={styles.image} source={require('../../media/splashScreen.png')} />
    </View>
    );
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1,
    width:'100%'
  }
});