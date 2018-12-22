import React, { Component } from 'react';
import {  ImageBackground, Image } from 'react-native';
import {  Text, Content, Item, Input, Form, Icon, View, Button, CheckBox } from 'native-base';

import styles from './style';

export default class SignUpScreen extends Component {
  render() {
    return (

      <ImageBackground source={require('../../media/bg_3.png')} style={{ width: '100%', height: '100%' }}>
        <Content contentContainerStyle={styles.loginContainer}>

          <View style={styles.viewStyle}>
            <Image source={require('../../media/main_logo.png')} />
            <Text style={styles.inputStyle}>Find Your Missing Person</Text>
          </View>

          <View style={styles.viewDirection}>
            <Text style={styles.loginStyle}>Login</Text>
            <Text style={styles.barStyle}>|</Text>
            <Text style={styles.signUpStyle}>Signup</Text>
          </View>

          <Form style={styles.formStyle}>

            <Item style={styles.itemStyle} rounded>
              <Icon type='AntDesign' active name='user' style={styles.inputStyle} />
              <Input placeholderTextColor='#fff' style={styles.inputStyle} placeholder='User Name' />
            </Item>

            <Item style={styles.itemStyle} rounded>
              <Icon type='MaterialCommunityIcons' active name='email-outline' style={styles.inputStyle} />
              <Input placeholderTextColor='#fff' style={styles.inputStyle} placeholder='Email' />
            </Item>

             <Item style={styles.itemStyle} rounded>
              <Icon type='Feather' active name='phone' style={styles.inputStyle} />
              <Input placeholderTextColor='#fff' style={styles.inputStyle} placeholder='Phone Number' />
            </Item>

             <Item style={styles.itemStyle} rounded>
              <Icon type='Feather' active name='lock' style={styles.inputStyle} />
              <Input placeholderTextColor='#fff' style={styles.inputStyle} placeholder='Password' />
            </Item>

            <View style={styles.privacy}>
            <CheckBox  checked={true} />
            <Text style={styles.privacyText}>
            | Accept Terms and Conditions, Privacy and Policy</Text>
          </View>

            
            <Button full rounded style={{ marginVertical: 20, backgroundColor: 'white' }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>SIGNUP</Text>
            </Button>

          </Form>

 
          <View style={styles.viewAccount}>
            <Text style={styles.inputStyle}>Already have an Account?</Text>
          </View>

        </Content>
      </ImageBackground>

    );
  }
}


