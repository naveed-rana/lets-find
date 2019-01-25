import React, { Component } from "react";
import { StatusBar, ImageBackground, Image } from "react-native";
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
import { styles } from "./style";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: true
    };
  }

  notificationHandler = () => {
    this.setState(preState => {
      return {
        notification: !preState.notification
      };
    });
  };

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
        <ListItem icon>
          <Left>
            <Button style={this.state.notification?
             {backgroundColor: "#FF9501"}
            :{backgroundColor: "lightgray"} }>
              <Icon  type="MaterialIcons" name="notifications-none" />
            </Button>
          </Left>
          <Body>
            <Text>Notifications</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.notification}
              onValueChange={this.notificationHandler}
            //   onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"#ff0000" , true: "#05CE1D"}}

            />
          </Right>
        </ListItem>
      </Container>
    );
  }
}
