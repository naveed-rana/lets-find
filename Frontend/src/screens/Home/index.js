import React, { Component } from "react";
import { ImageBackground,ScrollView, Image, StatusBar ,TouchableOpacity ,Drawer } from "react-native";
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
import showPopupMenu from 'react-native-popup-menu'
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            { id:'edit', label:'Quick Edit' },
            { id:'delete', label:'Trash' },
            { id:'follow', label:'Follow' }
          ],
          this.handleMoreItemSelect,
          this.moreButton
        );
    }

    handleMoreItemSelect = (item) => {
        alert('Pressed: ' + item.label)
    }
  render() {
    const shadowStyle={
       shadowOpacity:1,
       shadowRadius:15   
    }
    return (
      // <Drawer
      //   ref={(ref) => { this.drawer = ref; }}
      //   content={<SideBar navigator={this._navigator} />}
      //   onClose={() => this.closeDrawer()} >
      <Container>
        <View>
          <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
        </View>
        <View style={{shadowOpacity:1,shadowRadius:15}} >
          <ImageBackground
            source={require("../../media/sham2.jpg")}
            style={{ aspectRatio: 1.8 , shadowOpacity:1 }}
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
        {/* {/ Plus Button /} */}
        {/* <Content>
          <Button
            style={{
              backgroundColor: "#05CE1D",
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <Icon
              type="AntDesign"
              name="plus"
              style={{ fontSize: 20 }}
              color="white"
            />
          </Button>
        </Content> */}
        <TouchableOpacity style={styles.addNewButton}>
            <Icon type="AntDesign" name="plus"style={{ fontSize: 20,color:"#fff" }} color="white" />
        </TouchableOpacity>
        {/* PLus Button Ends*/}
        <ScrollView>
        <View style={styles.cardContainer}>
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
                      <Text>Isra Adil</Text>

                      <Text style={styles.statusText}>Missing</Text>
                    </View>

                    <View>
                      <Text style={styles.nameText}>Posted By Naveed</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: 5 }}>
                      <Icon
                        style={{ marginLeft: -5 }}
                        type="EvilIcons"
                        name="location"
                      />
                      <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                    </View>

                    <View style={styles.cardHeader}>
                      <Text style={styles.readMore} onPress={() => this.props.navigation.navigate('PersonDetail')}>Read More</Text>
                      <Icon
                        onPress={this.showMore}
                        style={{ marginTop: -5 }}
                        type="Entypo"
                        name="dots-three-horizontal"
                      />
                    </View>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

        {/* {/ start card 2 /} */}

        <View style={styles.cardContainer}>
          <Card>
            <CardItem listItemPadding={0}>
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
                      <Text>Isra Adil</Text>

                      <Text style={styles.statusText}>Missing</Text>
                    </View>

                    <View>
                      <Text style={styles.nameText}>Posted By Naveed</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: 5 }}>
                      <Icon
                        style={{ marginLeft: -5 }}
                        type="EvilIcons"
                        name="location"
                      />
                      <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                    </View>

                    <View style={styles.cardHeader}>
                      <Text style={styles.readMore}>Read More</Text>
                      <Icon
                        style={{ marginTop: -5 }}
                        type="Entypo"
                        name="dots-three-horizontal"
                      />
                    </View>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

        {/* {/ end card 2 /}

        {/ start card 2 /} */}

        <View style={styles.cardContainer}>
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
                      <Text>Isra Adil</Text>

                      <Text style={styles.statusText}>Missing</Text>
                    </View>

                    <View>
                      <Text style={styles.nameText}>Posted By Naveed</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: 5 }}>
                      <Icon
                        style={{ marginLeft: -5 }}
                        type="EvilIcons"
                        name="location"
                      />
                      <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                    </View>

                    <View style={styles.cardHeader}>
                      <Text style={styles.readMore}>Read More</Text>
                      <Icon
                        style={{ marginTop: -5 }}
                        type="Entypo"
                        name="dots-three-horizontal"
                      />
                    </View>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

        {/* {/ end card 2 /}

        {/ start card 2 /} */}

        <View style={styles.cardContainer}>
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
                      <Text>Isra Adil</Text>

                      <Text style={styles.statusText}>Missing</Text>
                    </View>

                    <View>
                      <Text style={styles.nameText}>Posted By Naveed</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop: 5 }}>
                      <Icon
                        style={{ marginLeft: -5 }}
                        type="EvilIcons"
                        name="location"
                      />
                      <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                    </View>

                    <View style={styles.cardHeader}>
                      <Text style={styles.readMore}>Read More</Text>

                      <Icon
                        style={{ marginTop: -5 }}
                        type="Entypo"
                        name="dots-three-horizontal"
                      />
                    </View>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
        </ScrollView>

        {/* {/ end card 2 /} */}
      </Container>
      // </Drawer>
    );
  }
}


