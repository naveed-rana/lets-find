import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Share,
  Modal,
  AsyncStorage
} from "react-native";
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
  Container,
  Drawer,
  Spinner
} from "native-base";

 

import img from '../../media/a.jpg'

import { styles } from "./style";
import SideBar from "../Sidebar";
import { connect } from "react-redux";
import ImageView from 'react-native-image-view';
// import fakeArray from '../../redux/fakeArray';

Drawer.defaultProps.styles.mainOverlay.elevation = 0;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appColor :'#05CE1D',
      fakeArray: [
        {
          id: "1",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWelu5a4sG2AHbTAxpT7w0PXvL_EPDPt1V9g2fRwMNB80OoFNwA",
          status: "Missing",
          name: "Naveed Rana",
          age: "teen",
          gender: "male",
          location: "Faisalabad",
          description:
            "Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.",
          disability: "mental",
          mobile: "+92 303 4766669",
          post_By: "Asif"
        }
      ],
      isImageViewVisible: false,
      currentImage:[
        {
            source: {
                uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
            },
        },
    ],
      loader: true
    };
  }

  componentWillReceiveProps(newProp) {
    this.setState({
      fakeArray: newProp.missingPersons,
      appColor:newProp.clr
    });
  }
  componentDidMount() {
    this.setState({ fakeArray: this.props.missingPersons,appColor:this.props.clr });
  }

 

  closeDrawer = () => {
    this.props.navigation.closeDrawer();
  };
  openDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // popup menu 3 dots
  refMoreButton = el => (this.moreButton = el);

  showMore = () => {
    showPopupMenu(
      [
        { id: "edit", label: "Quick Edit" },
        { id: "delete", label: "Trash" },
        { id: "follow", label: "Follow" }
      ],
      this.handleMoreItemSelect,
      this.moreButton
    );
  };

  handleMoreItemSelect = item => {
    alert("Pressed: " + item.label);
  };

  // For loader temporary

  render() {
    const { userStatus } = this.props;
    const {isImageViewVisible,currentImage,appColor} = this.state;
    return (
   
      <Container>
        <View>
          <StatusBar backgroundColor={appColor} barStyle="light-content" />
        </View>

        <Card style={styles.headerCardContainer}>
          <CardItem style={styles.headerCardItem}>
            <Body>
              <ImageBackground
                source={require("../../media/sham2.jpg")}
                style={{ width: "100%", shadowOpacity: 1 }}
              >
                <View style={[styles.header,{backgroundColor:appColor === 'black' ? "rgba(0,0,0, 0.5)": "rgba(5, 205, 29, 0.5)"}]}>

                  <Button transparent onPress={() => this.openDrawer()}>
                    <Icon name="menu" style={styles.searchIcon} />
                  </Button>
                  <Button transparent>
                    <Icon
                      onPress={() => this.props.navigation.navigate("Search")}
                      type="EvilIcons"
                      active
                      name="search"
                      style={styles.searchIcon}
                    />
                  </Button>
                  <Text style={styles.headerCenterText}>
                    An unwavering dream to return home
                  </Text>
                </View>
              </ImageBackground>
            </Body>
          </CardItem>
        </Card>

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
                          
                          {/* here model  */}

                          <TouchableOpacity
                            onPress={() =>
                              this.setState({ isImageViewVisible: true,
                                currentImage:
                                [
                                  {
                                  source: {
                                          uri:data.image,
                                      },
                                  },
                              ]
                              })
                            }
                          >
                            <Image
                              style={styles.filterImage}
                              source={{uri:data.image}}
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.textContainer}>
                          <TouchableOpacity
                            style={{ width: "100%" }}
                            onPress={() =>
                              this.props.navigation.navigate("PersonDetail", {
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
                                  image: data.image
                                }
                              })
                            }
                          >
                            <View style={styles.cardHeader}>
                              <Text>{data.name}</Text>

                              <Text style={{color:appColor}}>
                                {data.status}
                              </Text>
                            </View>

                            <View>
                              <Text style={styles.nameText}>
                                Posted By {data.post_By}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: "row",
                                paddingTop: 5
                              }}
                            >
                              <Icon
                                style={{ marginLeft: -5 }}
                                type="EvilIcons"
                                name="location"
                              />
                              <Text style={{ fontSize: 13 }}>
                                {data.location}
                              </Text>
                            </View>

                            <View style={styles.cardHeader}>
                              <Text
                                style={styles.readMore}
                                onPress={() =>
                                  this.props.navigation.navigate(
                                    "PersonDetail",
                                    {
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
                                        image: data.image
                                      }
                                    }
                                  )
                                }
                              >
                                Read More
                              </Text>

                              <Icon
                                onPress={() => {
                                  Share.share({
                                    message: `*Missing Person Alert* \n Name: *${
                                      data.name
                                    }* \n Age: *${data.age}* \n Gender: *${
                                      data.gender
                                    }* \n Disability: *${
                                      data.disability
                                    }* \n Location: *${
                                      data.location
                                    }* \n Contact No.: *${data.mobile}*`,
                                    url:
                                      "http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg",
                                    title: "Wow, did you see that?"
                                  });
                                }}
                                style={styles.shareIcon}
                                type="AntDesign"
                                name="sharealt"
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            );
          })}
        </ScrollView>

        {userStatus ? (
          <TouchableOpacity
            style={[styles.addNewButton,{backgroundColor:appColor,shadowColor:appColor}]}
            onPress={() => this.props.navigation.navigate("AddPerson")}
          >
            <Icon
              type="AntDesign"
              name="plus"
              style={{ fontSize: 20, color: "#fff" }}
              color="white"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          style={[styles.addNewButton,{backgroundColor:appColor,shadowColor:appColor}]}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon
              type="AntDesign"
              name="plus"
              style={{ fontSize: 20, color: "#fff" }}
              color="white"
            />
          </TouchableOpacity>
        )}

         <ImageView
          images={currentImage}
          imageIndex={0}
          onClose={() => this.setState({isImageViewVisible: false})}
          isVisible={isImageViewVisible}
        />
      </Container>
      // </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus,
    missingPersons: state.misingPersons.homeStories,
    clr:state.colorReducer.color
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
