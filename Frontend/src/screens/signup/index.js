import React, { Component } from "react";
import { ImageBackground, Image } from "react-native";
import {
  Text,
  Content,
  Item,
  Input,
  Form,
  Icon,
  View,
  Button,
  CheckBox
} from "native-base";

import styles from "./style";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      cell: ""
    };
  }


  onSubmit=()=>{
    console.log('====================================');
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.cell);
    console.log('====================================');
  }
  render() {
    return (
      <ImageBackground
        source={require("../../media/bg_3.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Content contentContainerStyle={styles.loginContainer}>
          <View style={styles.viewStyle}>
            <Image source={require("../../media/main_logo.png")} />
            <Text style={styles.inputStyle}>Find Your Missing Person</Text>
          </View>

          <View style={styles.viewDirection}>
            <Text style={styles.loginStyle}>Login</Text>
            <Text style={styles.barStyle}>|</Text>
            <Text style={styles.signUpStyle}>Signup</Text>
          </View>

          <Form style={styles.formStyle}>
            <Item style={styles.itemStyle} rounded>
              <Icon
                type="AntDesign"
                active
                name="user"
                style={styles.inputStyle}
              />
              <Input
                onChangeText={event => this.setState({
                  username: event
                })}
                placeholderTextColor="#fff"
                style={styles.inputStyle}
                placeholder="User Name"
              />
            </Item>

            <Item style={styles.itemStyle} rounded>
              <Icon
                type="MaterialCommunityIcons"
                active
                name="email-outline"
                style={styles.inputStyle}
              />
              <Input
                placeholderTextColor="#fff"
                style={styles.inputStyle}
                placeholder="Email"
                onChangeText={event => this.setState({
                  email: event
                })}
              />
            </Item>

            <Item style={styles.itemStyle} rounded>
              <Icon
                type="Feather"
                active
                name="phone"
                style={styles.inputStyle}
              />
              <Input
                placeholderTextColor="#fff"
                style={styles.inputStyle}
                placeholder="Phone Number"
                onChangeText={event => this.setState({
                  cell: event
                })}
              />
            </Item>

            <Item style={styles.itemStyle} rounded>
              <Icon
                type="Feather"
                active
                name="lock"
                style={styles.inputStyle}
              />
              <Input
                placeholderTextColor="#fff"
                style={styles.inputStyle}
                placeholder="Password"
                onChangeText={event => this.setState({
                  password: event
                })}
              />
            </Item>

            <View style={styles.privacy}>
              <CheckBox checked={true} />
              <Text style={styles.privacyText}>
                | Accept Terms and Conditions, Privacy and Policy
              </Text>
            </View>

            <Button
              full
              rounded
              style={{ marginVertical: 20, backgroundColor: "white" }}
              onPress={this.onSubmit}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>SIGNUP</Text>
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
