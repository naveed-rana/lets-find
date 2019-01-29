import React, { Component } from "react";
import {getStartUserLogin} from '../../redux/actions/UserActions';
import { ImageBackground, Image,ScrollView } from "react-native";
import {connect} from 'react-redux';
import {
  Text,
  Content,
  Item,
  Input,
  Form,
  Icon,
  View,
  Button,
  Spinner
} from "native-base";

import styles from "./style";

class LoginScreen extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      email: "asif",
      password: "",
      loader:false,
      appColor:''
    };
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loader: false,appColor:nextProps.clr});
    if(nextProps.loginLoader == 'move'){
    this.props.navigation.navigate("AddPerson");
    }
    
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

  this.props.getStartUserLogin(data);

  }

  render() {
    const {loader,appColor} = this.state;
    return (
      <ScrollView
      style={{backgroundColor:appColor}}
      >
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
            style={styles.loginStyle}>Login</Text>
            <Text style={styles.barStyle}>|</Text>
            <Text
            onPress={() => this.props.navigation.navigate("SignUp")}
            style={styles.signUpStyle}>Signup</Text>
          </View>

          <Form style={styles.formStyle}>
            <Item style={styles.itemStyle} rounded>
              <Icon style={styles.inputStyle} active name="mail" />
              <Input
                name="email"
                onChangeText={(event)=>this.setState({email: event})}
                placeholderTextColor="#fff"
                style={styles.inputStyle}
                placeholder="Email"
              />
            </Item>

            <Item style={styles.itemStyle} rounded>
              <Icon style={styles.inputStyle} active name="eye" />
              <Input
                name="password"
                onChangeText={(event)=>this.setState({password: event})}
                secureTextEntry={true}
                placeholderTextColor="#fff"
                style={styles.inputStyle}
                placeholder="Password"
              />
            </Item>

            

            <Text style={styles.forgetStyle}>Forgot Password?</Text>
            

            {loader ? 
          <Button
          full
          rounded
          type="submit"
          style={{ marginVertical: 20, backgroundColor: "white" }}
          onPress={this.onSubmit}
        >
         <Spinner color='green' />
        </Button>
            :
            <Button
              full
              rounded
              type="submit"
              style={{ marginVertical: 20, backgroundColor: "white" }}
              onPress={this.onSubmit}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>LOGIN</Text>
            </Button>
            }

          </Form>

          <View style={styles.viewAccount}>
            <Text style={styles.loginStyle}>Don't have an Account?</Text>
            <Text
            onPress={() => this.props.navigation.navigate("SignUp")}
             style={styles.loginStyle}> Signup</Text>
          </View>
             
             <Text style={{color:'#fff',textAlign:'center'}}>------------ or ------------</Text>
             
          <View style={{flexDirection:'row',justifyContent:'center'}}> 
          <View  style={styles.socialIconG}>
            <Icon 
             style={{alignSelf: 'center',marginTop:10,color:'white'}} 
            type="Entypo" name="facebook"/>
            </View>
            <View  style={styles.socialIconG}>
            <Icon 
           style={{alignSelf: 'center',marginTop:9,color:'white',fontSize:30,}} 
            type="FontAwesome5" name="google-plus-square"/>
            </View>
            <View  style={styles.socialIconG}>
            <Icon  style={{alignSelf: 'center',marginTop:10,color:'white',}}  type="FontAwesome5" name="microsoft"/>
            </View>
          </View>

        </Content>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) =>{  
  return{
    loginLoader:state.userReducer.loginLoader,
    clr:state.colorReducer.color
  }}

export default connect(mapStateToProps, {getStartUserLogin})(LoginScreen)