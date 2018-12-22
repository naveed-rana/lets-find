import React, { Component } from 'react';
import {  ImageBackground, Image } from 'react-native';
import {  Text, Content, Item, Input, Form, Icon, View, Button, CheckBox } from 'native-base';
import styles from './style';

export default class SignUpScreen extends Component {
    render() {
      return (
          <Content style={styles.wrapper}>
                <View style={styles.topcontent}>
                    <Icon type='AntDesign' name='close' style={styles.topCross} />
                    <Text style={styles.topText}> Show Profile </Text>
                    <Text style={styles.topsave}> Save </Text>
                </View>
          </Content>
  
      );
    }
  }