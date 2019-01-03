import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Share,
  Modal
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
  Drawer
} from "native-base";
import ImageViewer from "react-native-image-zoom-viewer";

import { styles } from "./style";
import SideBar from "../Sidebar";
import { connect } from "react-redux";
// import fakeArray from '../../redux/fakeArray';
import image from "../../media/sham.jpg";

Drawer.defaultProps.styles.mainOverlay.elevation = 0;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeArray: [
        {
          id: "1",
          image: "",
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
      modalVisible: false
    };

    console.log("#####################################");
    // console.log("Fake Array: " + this.state.fakeArray[0].name);
  }

  componentWillReceiveProps(newProp) {
    console.log("====================================");
    console.log(newProp);
    console.log("====================================");
    this.setState({
      fakeArray: newProp
    });
  }
  componentDidMount() {
    this.setState({ fakeArray: this.props.missingPersons });
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
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

  render() {
    const shadowStyle = {
      shadowOpacity: 1,
      shadowRadius: 15
    };
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <View>
            <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
          </View>

          <Card style={styles.headerCardContainer}>
            <CardItem style={styles.headerCardItem}>
              <Body>
                <ImageBackground
                  source={require("../../media/sham2.jpg")}
                  style={{ width: "100%", shadowOpacity: 1 }}
                >
                  <View style={styles.header}>
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

          <TouchableOpacity
            style={styles.addNewButton}
            onPress={() => this.props.navigation.navigate("AddPerson")}
          >
            <Icon
              type="AntDesign"
              name="plus"
              style={{ fontSize: 20, color: "#fff" }}
              color="white"
            />
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
                            <Modal
                              visible={this.state.modalVisible}
                              transparent={true}
                              animationType="slide"
                              // transparent={false}
                              onRequestClose={() => {
                                this.modalVisible(false);
                              }}
                            >
                              <View style={styles.modalOverlay}>
                                <Icon
                                  style={styles.modalClose}
                                  type="AntDesign"
                                  name="close"
                                  onPress={() =>
                                    this.setState({ modalVisible: false })
                                  }
                                />
                                <View
                                  style={{ flex: 1, justifyContent: "center" }}
                                >
                                  <Image
                                    style={styles.modalImage}
                                    source={require("../../media/sham.jpg")}
                                  />
                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({ modalVisible: true })
                              }
                            >
                              <Image
                                style={styles.filterImage}
                                source={require("../../media/sham.jpg")}
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
                                    mobile: data.mobile
                                  }
                                })
                              }
                            >
                              <View style={styles.cardHeader}>
                                <Text>{data.name}</Text>

                                <Text style={styles.statusText}>
                                  {data.status}
                                </Text>
                              </View>

                              <View>
                                <Text style={styles.nameText}>
                                  Posted By {data.post_By}
                                </Text>
                              </View>

                              <View
                                style={{ flexDirection: "row", paddingTop: 5 }}
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
                                          mobile: data.mobile
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
                                  style={{
                                    marginTop: -5,
                                    fontSize: 25,
                                    color: "gray",
                                    paddingHorizontal: 20,
                                    paddingTop: 15
                                  }}
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
        </Container>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  console.log("====================================");
  console.log("from show data props" + state.misingPersons);
  console.log("====================================");
  return {
    missingPersons: state.misingPersons.homeStories
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
