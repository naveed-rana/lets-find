import React, { Component } from "react";
import {connect} from 'react-redux';
import { ImageBackground, Image,ScrollView } from "react-native";

import {
  Text,
  Content,
  Item,
  Input,
  Form,
  Icon,
  View,
  Button,
  CheckBox,
  Spinner
} from "native-base";
//import actions
import {registerUser} from '../../redux/actions/UserActions';

import styles from "./style";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      cell: "",
      loader:false,
      appColor:''
    };
  }

  

  componentWillReceiveProps(nextProps) {
    
    this.setState({loader: false,appColor:newProp.clr});
    if(nextProps.registerLoader == 'success'){
    this.props.navigation.navigate("Login");
    }

    console.log('full state',this.state);
    
    
}


componentDidMount() {
  this.setState({appColor:this.props.clr });
}


  onSubmit=()=>{

   this.setState({loader:true})
    let data = {"user":{
      name:this.state.username,
      email:this.state.email,
      password:this.state.password,
      cell:this.state.cell
  }}

  this.props.registerUser(data);
  }
  render() {
    const {loader,appColor} = this.state;
  //  console.log('props from comp',loader);
   
    return (
        <ScrollView style={{backgroundColor:appColor}}>
        <View>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={{marginLeft: 5, fontWeight:'bold',color:'white'}}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />
          </View>
        <Content contentContainerStyle={styles.loginContainer}>
          <View style={styles.viewStyle}>
            <Image source={require("../../media/main_logo.png")} />
            <Text style={styles.inputStyle}>Find Your Missing Person</Text>
          </View>

          <View style={styles.viewDirection}>
            <Text
            onPress={() => this.props.navigation.navigate("Login")}
            style={styles.loginStyle}>Login</Text>
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
                type="AntDesign"
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
                type="MaterialCommunityIcons"
                active
                name="textbox-password"
                style={styles.inputStyle}
              />
              <Input
                secureTextEntry={true}
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
            
            {loader ? 
           <Button
            full
            rounded
            style={{ marginVertical: 20, backgroundColor: "white" }}
            >
           <Spinner color='green' />
          </Button>
            :
            <Button
              full
              rounded
              style={{ marginVertical: 20, backgroundColor: "white" }}
              onPress={this.onSubmit}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>SIGNUP</Text>
            </Button>
            }
          </Form>

          <View 
          onPress={() => this.props.navigation.navigate("Login")}
          style={styles.viewAccount}>
            <Text style={styles.inputStyle}>Already have an Account?</Text>
          </View>
        </Content>
        </ScrollView>
    );
  }
}

mapStateToProps = (state) => {
  return {
    registerLoader:state.userReducer.registerLoader,
    clr:state.colorReducer.color
  }
}

export default connect(mapStateToProps,{registerUser})(SignUpScreen);