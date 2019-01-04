import React, { Component } from 'react';
import {
  Text,
  Image
} from 'react-native';
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch,Button } from 'native-base';
import { styles } from './style';
export default class Sidebar extends Component {
  render() {
    return (
      <Content style={styles.sidebarWrapper}>
        <Content style={styles.sideBarTopPanel}>
          <Image source={require("../../media/show-profile.png")} style={{ alignSelf: "center" }} />
          <Text style={{ alignSelf: "center", fontWeight: "bold", marginTop: 5 }} >Muhammad Fayyaz</Text>
        </Content>
        <Content>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="home" type="AntDesign"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>Home</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="user" type="AntDesign"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>My Profile</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="dashboard" type="MaterialIcons"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15, backgroundColor: "green"}} >
              <Text onPress={()=>this.props.navigation.navigate("Home")} style={{fontSize:15, backgroundColor: "red"}}>My Posts</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="suitcase" type="FontAwesome"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>Resolved Cases</Text>
            </Body>
          </ListItem>
          <Text style={{borderTopWidth:1,height:0,borderColor:"#bfbfbf"}} ></Text>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="setting" type="AntDesign"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>Settings</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="info" type="AntDesign"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>About</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="feedback" type="MaterialIcons"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>Feedback</Text>
            </Body>
          </ListItem>
          <Text style={{borderTopWidth:1,height:0,borderColor:"#bfbfbf"}} ></Text>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="logout" type="AntDesign"/>
              </Button>
            </Left>
            <Body style={{borderBottomWidth:0,marginLeft:15}}>
              <Text style={{fontSize:15}}>Logout</Text>
            </Body>
          </ListItem>
        </Content>
      </Content>
    );
  } 
}