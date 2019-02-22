import React, { Component } from 'react';
import { View,Image,StatusBar,StyleSheet} from 'react-native';
import { connect } from 'react-redux';


class SplashScreen extends Component {

  componentDidMount = () => {
    if(this.props.checkLogin == "change"){
      if(this.props.checkLogin.userStatus){
        this.props.navigation.navigate("Homes")
    }
    else{
      this.props.navigation.navigate("Login")
    }
    }
  };
  

  componentWillReceiveProps(newProp) {
    console.log('cwrps',newProp);
    if(newProp.checkLogin == "change"){
      if(newProp.userStatus){
        this.props.navigation.navigate("Homes")
      }
      else{
        this.props.navigation.navigate("Login")
      }
    }
    
   }

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

const mapStateToProps = (state) => {
  
  console.log('state checkLogin',state.userReducer.checkLogin);

  return {
    userStatus:state.userReducer.userStatus,
    checkLogin:state.userReducer.checkLogin
  }

}

export default connect(mapStateToProps,null)(SplashScreen);