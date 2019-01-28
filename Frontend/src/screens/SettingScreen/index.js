import React, { Component } from "react";
import { StatusBar, ImageBackground, Image,AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Content,
  Switch,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import { styles } from "./style";
import {getStartChangeColor} from '../../redux/actions/colorActions';

var appColor="#05CE1D";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nativegreen: true,
      nightblack:false,
      darkorange:false
    };
  }

  
  componentDidMount() {

    appColor= this.props.clr;

     switch (appColor) {
       case '#05CE1D':
       {
        this.setState({
          nativegreen:true,
          nightblack:false,
          darkorange:false,
        })
        break;
      }
      case '#34495e':
       {
        this.setState({
          nightblack:true,
          nativegreen:false,
          darkorange:false,
        })
        break;
      }

      case '#f39c12':
       {
        this.setState({
          darkorange:true,
          nightblack:false,
          nativegreen:false,
          
        })
        break;
      }
         
       default:
         break;
     }

    

  }
  

  nativeGreenApply = () => {
    if (this.state.nativegreen !== true) {
      this._storeData('#05CE1D');
      this.setState({
        nativegreen:true,
        nightblack:false,
        darkorange:false,
      })
    }
    
  };

  nightBlackApply = () =>{
    if (this.state.nightblack !== true) {
      this._storeData('#34495e');
    this.setState({
      nightblack:true,
      nativegreen:false,
      darkorange:false,
      
    })
  }
}

darkOrangeApply =() => {
  if (this.state.darkorange !== true) {
    this._storeData('#f39c12');
  this.setState({
    darkorange:true,
    nightblack:false,
    nativegreen:false,
    
  })
}
}

_storeData = async (val) => {
  appColor = val;
  this.props.getStartChangeColor(val);
  try {
    await AsyncStorage.setItem('color', val);
  } catch (error) {
    console.log('err',error);
    
    // Error saving data
  }
}



  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <Container>

        <StatusBar backgroundColor={appColor} barStyle="light-content" />
        <View style={[styles.header,{backgroundColor:appColor,}]}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Settings</Text>
          
          <Text></Text>
          
        </View>

        <View style={{alignItems:'center',marginTop:10,marginBottom:10}}>
           
           <Text style={{fontWeight:'bold',color:appColor}}> Choose Your Favourite Theme </Text>
           
         </View>

        <ListItem icon>
          <Left>
            <Button style={
             {backgroundColor: "#05CE1D"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text>Native Green</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.nativegreen}
              onValueChange={this.nativeGreenApply}
            //   onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#05CE1D"}}

            />
          </Right>
        </ListItem>

        <ListItem icon>
          <Left>
            <Button style={
             {backgroundColor: "#34495e"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text>Dark Theme</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.nightblack}
              onValueChange={this.nightBlackApply}
              // onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#34495e"}}

            />
          </Right>
        </ListItem>


        <ListItem icon>
          <Left>
            <Button style={
             {backgroundColor: "#f39c12"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text>Orange</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.darkorange}
              onValueChange={this.darkOrangeApply}
              // onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#f39c12"}}

            />
          </Right>
        </ListItem>
         

      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    clr:state.colorReducer.color
  };
};


export default connect(mapStateToProps,{getStartChangeColor})(componentName);