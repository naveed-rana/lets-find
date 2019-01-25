import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal,
  Share
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
  Container,
  Picker,
  Form,
  Button,
  Header,
  Left,
  Right,
  Title
} from "native-base";
import ImagePicker from "react-native-image-picker";
import styles from "./style";

import { connect } from "react-redux";

const options = {
  title: "Select Option",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: "",
      selectedDisability: "",
      selectedGender: "",
      selectedAgeGroup: "",
      location: "",

      fakeArray: [
        {
          id: "1",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyXov49V0vl3zSQGocwgBiOhf-I_iZqlf04-3FDfWnxNG91D64A",
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
  }
  uploadImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          image: source
        });
      }
    });
  };
  componentDidMount() {
    this.setState({ fakeArray: this.props.missingPersons });
  }

  onSubmit = () => {
    console.log("====================================");
    console.log(this.state.selectedStatus);
    console.log(this.state.selectedDisability);
    console.log(this.state.selectedGender);
    console.log(this.state.selectedAgeGroup);
    console.log(this.state.location);
    console.log("====================================");
  };
  onStatusChange(value) {
    this.setState({
      selectedStatus: value
    });
  }
  onDisabilityChange(value) {
    this.setState({
      selectedDisability: value
    });
  }
  onGenderChange(value) {
    this.setState({
      selectedGender: value
    });
  }
  onAgeGroupChange(value) {
    this.setState({
      selectedAgeGroup: value
    });
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {/* <View style={styles.searchContainer}> */}

        <View>
          <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
        </View>
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Active Post</Text>
          <Icon
            name="menu"
            style={styles.headerIcon}
            onPress={() => this.openDrawer()}
          />
        </View>

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
                              source={{uri:data.image}}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={styles.textContainer}>
                          <TouchableOpacity
                            style={{ width: "100%" }}
                            onPress={() =>
                              navigation.navigate("EditPost", {
                                data: {
                                  name: data.name,
                                  status: data.status,
                                  age: data.age,
                                  gender: data.gender,
                                  disability: data.disability,
                                  description: data.description,
                                  location: data.location,
                                  id: data.id,
                                  image: data.image
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

                            <View
                              style={{
                                flexDirection: "row",
                                paddingTop: 2
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
                              <View style={{ flexDirection: "row" }}>
                                <Icon
                                  style={{ fontSize: 20 }}
                                  type="AntDesign"
                                  name="edit"
                                />
                                <Text
                                  style={styles.readMore}
                                  onPress={() =>
                                    navigation.navigate("EditPost", {
                                      data: {
                                        name: data.name,
                                        status: data.status,
                                        age: data.age,
                                        gender: data.gender,
                                        disability: data.disability,
                                        description: data.description,
                                        location: data.location,
                                        id: data.id,
                                        image: data.image
                                      }
                                    })
                                  }
                                >
                                  Edit
                                </Text>
                              </View>

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
                                  color: "gray"
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
    );
  }
}

const mapStateToProps = state => {
  return {
    missingPersons: state.misingPersons.UserPosts
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchScreen);
