import React, { Component } from "react";
import { ImageBackground, ScrollView, Image, StatusBar, TouchableOpacity,Share } from "react-native";
import {
  View,
  Text,
  Content,
  Item,
  Input,
  Icon,
  Card,
  CardItem,
  Body,
  Button,
  Container
} from "native-base";
import { styles } from './style';
import SideBar from '../Sidebar';

// import Share from 'react-native-share';
// const shareOptions = {
//   title: 'Share via',
//   url: 'some share url',
//   social: Share.Social.WHATSAPP
// };

import fakeArray from '../../Redux/fakeArray';



export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeArray: fakeArray,
    };

    console.log('#####################################');
    console.log('Fake Array: ' + this.state.fakeArray[0].name);
  }
  closeDrawer() {
    this._drawer._root.close()
  };
  openDrawer() {
    this._drawer._root.open()
  };
  // popup menu 3 dots
  refMoreButton = el => this.moreButton = el

  showMore = () => {
    showPopupMenu(
      [
        { id: 'edit', label: 'Quick Edit' },
        { id: 'delete', label: 'Trash' },
        { id: 'follow', label: 'Follow' }
      ],
      this.handleMoreItemSelect,
      this.moreButton
    );
  }

  handleMoreItemSelect = (item) => {
    alert('Pressed: ' + item.label)
  }
  render() {
    const shadowStyle = {
      shadowOpacity: 1,
      shadowRadius: 15
    }
    return (
      <Container>
        <View>
          <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
        </View>
        <View style={{ shadowOpacity: 1, shadowRadius: 15 }} >
          <ImageBackground
            source={require("../../media/sham2.jpg")}
            style={{ aspectRatio: 1.8, shadowOpacity: 1 }}
          >
            <View style={styles.header}>
              <Button transparent>
                <Icon
                  name="menu" style={styles.searchIcon} />
              </Button>
              <Button transparent>
                <Icon
                  onPress={() => this.props.navigation.navigate('Search')}
                  type="EvilIcons"
                  active
                  name="search"
                  style={styles.searchIcon}
                />
              </Button>
              <Text style={styles.headerCenterText}>An unwavering dream to return home</Text>
            </View>
          </ImageBackground>
        </View>

        <TouchableOpacity style={styles.addNewButton} onPress={() => this.props.navigation.navigate('AddPerson')} >
          <Icon type="AntDesign" name="plus" style={{ fontSize: 20, color: "#fff" }} color="white" />
        </TouchableOpacity>
        {/* PLus Button Ends*/}
        <ScrollView>

          {this.state.fakeArray.map((data, index) => {
            return (
              <View key={index} style={styles.cardContainer}>

                <Card>
                  <CardItem>
                    <Body>
                      <View style={styles.cardInnerContainer}>
                        <View>
                          <Image
                            style={styles.filterImage}
                            source={require("../../media/sham.jpg")}
                          />
                        </View>

                        <View style={styles.textContainer}>
                          <View style={styles.cardHeader}>
                            <Text>{data.name}</Text>

                            <Text style={styles.statusText}>{data.status}</Text>
                          </View>

                          <View>
                            <Text style={styles.nameText}>Posted By {data.post_By}</Text>
                          </View>

                          <View style={{ flexDirection: "row", paddingTop: 5 }}>
                            <Icon
                              style={{ marginLeft: -5 }}
                              type="EvilIcons"
                              name="location"
                            />
                            <Text style={{ fontSize: 13 }}>{data.location}</Text>
                          </View>

                          <View style={styles.cardHeader}>
                            <Text style={styles.readMore} onPress={() => this.props.navigation.navigate('PersonDetail', {
                              data: {
                                id: data.id,
                                name: data.name,
                                status: data.status,
                                post_By: data.post_By,
                                age: data.age,
                                gender: data.gender,
                                disability: data.disability,
                                description: data.description,
                                location: data.location,
                                mobile: data.mobile,
                              }
                            }
                            )}>Read More</Text>

                            <Icon
                            onPress={()=>{
                              Share.share({
                                message: `*Missing Person Alert* \n Name: *${data.name}* \n Age: *${data.age}* \n Gender: *${data.gender}* \n Disability: *${data.disability}* \n Location: *${data.location}* \n Contact No.: *${data.mobile}*`,
                                url:'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',
                                title: 'Wow, did you see that?'
                              })
                            }}
                              style={{ marginTop: -5,fontSize:25,color:'gray'}}
                              type="AntDesign"
                              name="sharealt"
                            />
                          </View>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            )
          }
          )}


        </ScrollView>
      </Container>

    );
  }
}


