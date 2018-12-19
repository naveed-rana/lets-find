import React, { Component } from 'react';
import { View,Image,StyleSheet} from 'react-native';

export default class SplashScreen extends Component {

  render() {
    return (
      <View >
        <Image
          
          source={require('../media/splashScreen.png')}
        />
      </View>
    );
  }
}

