import React, { Component } from "react";
import { ImageBackground, StatusBar, TouchableOpacity } from "react-native";
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
import Card from "./card"

export default class HeaderIconExample extends Component {
  render() {
    return (
      <Content>
        <View>
          <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
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
        
        <View style={styles.cardContainer}>
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={styles.cardInnerContainer}>

                                    <View>
                                        <Image style={styles.filterImage} source={require('../../media/sham.jpg')} />
                                    </View>

                                    <View style={styles.textContainer}>
                                        <View style={styles.cardHeader}>
                                            <Text >
                                                Isra Adil
                                            </Text>

                                            <Text style={styles.statusText}>
                                                *Missing*
                                             </Text>
                                        </View>

                                        <View>
                                            <Text style={styles.nameText}>
                                                Posted By Naveed
                                       </Text>
                                        </View>
                                       
                                        <View style={{flexDirection:'row',paddingTop:5}}>    

                                            <Icon style={{marginLeft:-5}} type="EvilIcons" name="location"/>    
                                            <Text style={{fontSize:13}}>
                                                Faisalabad
                                            </Text>

                                        </View>

                                        <View style={styles.cardHeader}>
                                            <Text style={styles.readMore}>
                                                Read More
                                            </Text>

                                            <Icon style={{ marginTop: -5 }} type="Feather" name="more-horizontal" />
                                        </View>

                                    </View>

                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                </View>

        <View style={styles.buttonParent}>
        <View style={styles.addIconView}>
          <TouchableOpacity style={styles.addNewButton}>
            {/* <Icon type="AntDesign" active name="plus" /> */}
            <Icon type="AntDesign" name="plus" size={30} color="white" />
          </TouchableOpacity>
        </View>
        </View>
      </Content>
    );
  }
}
