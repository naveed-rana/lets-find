import React, { Component } from "react";
import { ImageBackground, StatusBar } from "react-native";
import {
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
  Text
} from "native-base";
import { styles } from "./style";

export default class HeaderIconExample extends Component {
  render() {
    return (
      <Content>
        <View>
            <StatusBar
                backgroundColor="#05CE1D"
                barStyle="light-content"
            />
         </View>
        <View>
        
          <ImageBackground
            source={require("../../media/bg_3.png")}
            style={styles.BackgroundImage}
          >
            <View style={styles.header}>
              <Button transparent>
                <Icon name="menu" style={styles.searchIcon} />
              </Button>

              <Button transparent>
                <Icon
                  type="EvilIcons"
                  active
                  name="search"
                  style={styles.searchIcon}
                />
              </Button>
            </View>
          </ImageBackground>
        </View>

    
        <Button iconLeft rounded style={styles.addButton}>
        <Icon
                  type="AntDesign"
                  active
                  name="plus"
                  style={styles.addIcon}
                />            
           
          </Button>
   

        
      </Content>
    );
  }
}
