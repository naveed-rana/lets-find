import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import {  Text, Content, Item, Input, Form, Icon, View, Button } from 'native-base';


export default class LoginScreen extends Component {
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
              <Icon active name='mail' />
              <Input placeholderTextColor='#fff' style={styles.inputStyle} placeholder='Email' />
            </Item>

            <Item style={styles.itemStyle} rounded>
              <Icon active name='eye' />
              <Input placeholderTextColor='#fff' style={styles.inputStyle} placeholder='Password' />
            </Item>


            <Text style={styles.forgetStyle}>Forgot Password?</Text>
            <Button full rounded style={{ marginVertical: 20, backgroundColor: 'white' }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>LOGIN</Text>
            </Button>

          </Form>


          <View style={styles.viewAccount}>
            <Text style={styles.loginStyle}>Don't have an Account?</Text>
            <Text style={styles.loginStyle}> Signup</Text>
          </View>

        </Content>
      </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  inputStyle: {
    color: '#fff'
  },
  itemStyle: {
    marginVertical: 8,
    //  marginHorizontal:10,
  },
  formStyle: {
    marginHorizontal: 20
  },
  viewStyle: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  viewDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  viewAccount:
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

  barStyle: {
    fontSize: 30,
    color: 'white',
    paddingHorizontal: 15
  }
  ,
  signUpStyle: {
    color: '#90a578',
    fontSize: 18
  },
  loginStyle: {
    fontSize: 19,
    color: 'white'
  },
  forgetStyle: {
    textAlign: 'right',
    color: 'white'
  },




})