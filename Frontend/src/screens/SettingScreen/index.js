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
    };
  }

  
  componentDidMount() {

      this._retrieveData();

  }
  

  nativeGreenApply = () => {
    if (this.state.nativegreen !== true) {
      this._storeData('#05CE1D');
      this.setState({
        nativegreen:true,
        nightblack:false,
      })
    }
    
  };

  nightBlackApply = () =>{
    if (this.state.nightblack !== true) {
      this._storeData('black');
    this.setState({
      nightblack:true,
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

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('color');
      console.log('data res',value);
      if (value !== null) {
        // console.log('valueasdf',value);
          appColor= value;
          if ( value === '#05CE1D')
            {
              this.setState({
                nativegreen:true,
                nightblack:false
              })
            }
          if ( value === 'black')
            {
              this.setState({
                nightblack:true,
                nativegreen:false,
              })
            }
    }
   } catch (error) {
     console.log('err',error);
     
     // Error retrieving data
   }
}



  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <Container>

        <StatusBar backgroundColor="#05CE5D" barStyle="light-content" />
        <View style={styles.header}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Settings</Text>
          <Icon
            name="menu"
            style={styles.headerIcon}
            onPress={() => this.openDrawer()}
          />
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
             {backgroundColor: "black"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text>Night theme</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.nightblack}
              onValueChange={this.nightBlackApply}
              // onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "black"}}

            />
          </Right>
        </ListItem>
         

      </Container>
    );
  }
}

export default connect(null,{getStartChangeColor})(componentName);