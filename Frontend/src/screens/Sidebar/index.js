import React, { Component } from 'react';
import {
  Text,
  Image
} from 'react-native';
import {  Content,  ListItem, Icon, Left, Body, Button,View } from 'native-base';
import { styles } from './style';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions/UserActions';

import {registerUser} from '../../redux/actions/UserActions';

class Sidebar extends Component {

  logout = () =>{
    this.props.userLogout();
    this.props.navigation.closeDrawer();
  }
 


  render() {
          const {userStatus,user} = this.props;
          // console.log(userStatus);
          
    return (
      <Content style={styles.sidebarWrapper}>
        <Content style={styles.sideBarTopPanel}>
          <Image source={require("../../media/show-profile.png")} style={{ alignSelf: "center" }} />
          {userStatus ? 
          <Text style={{ alignSelf: "center", fontWeight: "bold", marginTop: 5 }} >
          {user.name}</Text>
          :<Text/>
          }
        </Content>
        <Content>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Homes")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="home" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Home</Text>
            </Body>
          </ListItem>

          {userStatus ? 
          <View> 
          <ListItem onPress={() => this.props.navigation.navigate("Profile")} icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="user" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>My Profile</Text>
            </Body>
          </ListItem>
           
          <ListItem onPress={() => this.props.navigation.navigate("Notifications")} icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="notifications-outline" type="Ionicons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Notifications</Text>
            </Body>
          </ListItem>

          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("LetsAdd")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="add-user" type="Entypo" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Post Now</Text>
            </Body>
          </ListItem>

          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("ActiveCases")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="dashboard" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }} >
              <Text style={{ fontSize: 15 }}>Active Posts</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("ResolvedCases")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="suitcase" type="FontAwesome" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Resolved Cases</Text>
            </Body>
          </ListItem>
           </View>:
          
          <View>

          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Search")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="search" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }} >
              <Text style={{ fontSize: 15 }}>Search</Text>
            </Body>
          </ListItem>
          
          </View>
        
        }
          <Text style={{ borderTopWidth: 1, height: 0, borderColor: "#bfbfbf" }} ></Text>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Settings")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="setting" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Settings</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Aboutus")}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="info" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }} >
              <Text style={{ fontSize: 15 }}>About</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="feedback" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Feedback</Text>
            </Body>
          </ListItem>
          <Text style={{ borderTopWidth: 1, height: 0, borderColor: "#bfbfbf" }} ></Text>

            {/* user login,logout */}
          {userStatus ? 
          <ListItem onPress={this.logout} icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="logout" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Logout</Text>
            </Body>
          </ListItem>
          :
          <View>
          <ListItem
          onPress={() => this.props.navigation.navigate("Login")}
           icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="login" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Login</Text>
            </Body>
          </ListItem>

          <ListItem 
          onPress={() => this.props.navigation.navigate("SignUp")}
           icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: "#05CE1D" }}>
                <Icon active name="account-plus-outline" type="MaterialCommunityIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0, marginLeft: 15 }}>
              <Text style={{ fontSize: 15 }}>Register</Text>
            </Body>
          </ListItem>
          </View>
          }

        </Content>
      </Content>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log('map state to props',state);
  
  return {
    userStatus:state.userReducer.userStatus,
    user:state.userReducer.user,
    registerLoader:state.userReducer.registerLoader
  }
}

export default connect(mapStateToProps,{userLogout})(Sidebar);