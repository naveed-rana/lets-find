import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Share
} from "react-native";
import {
  View,
  Text,
  Icon,
  Card,
  CardItem,
  Body,
  Container,
} from "native-base";

import ImagePicker from "react-native-image-picker";
import styles from "./style";
import ImageView from 'react-native-image-view';

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
      appColor :'green',
      isImageViewVisible: false,
      currentImage:[
        {
            source: {
                uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
            },
        },
    ],
      fakeArray: [
        {
          id: "1",
          image: "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg",
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
    this.setState({ fakeArray: this.props.ResolvedCases,appColor:this.props.clr  });
  }

componentWillReceiveProps(newProp) {
    this.setState({
      appColor:newProp.clr
    });
  }


  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {

    const { navigation } = this.props;
    const {isImageViewVisible,currentImage,appColor} = this.state;

    return (
      <Container>
        {/* <View style={styles.searchContainer}> */}

        <View>
          <StatusBar backgroundColor={appColor} barStyle="light-content" />
        </View>
        <View style={[styles.header,{backgroundColor:appColor}]}>
          <Icon
            onPress={() => navigation.navigate('Homes')}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Resolved Cases</Text>
          
          <Text></Text>
          
        </View>
{this.state.fakeArray.length >=1?
        <ScrollView>
          {this.state.fakeArray.map((data, index) => {
            return (
              <View key={index} style={styles.cardContainer}>
                <Card>
                  <CardItem>
                    <Body>
                      <View style={styles.cardInnerContainer}>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({ isImageViewVisible: true,
                                currentImage:
                                [
                                  {
                                  source: {
                                          uri:`${EndPoint}/data/${data.status}/${data.image}`,
                                      },
                                  },
                              ]
                              })
                            }
                          >
                            <Image
                              style={styles.filterImage}
                              source={{uri:`${EndPoint}/data/${data.status}/${data.image}`}}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={styles.textContainer}>
                          <TouchableOpacity
                            style={{ width: "100%" }}
                            onPress={() =>
                              navigation.navigate("ResolvedCaseDetail", {
                                data: {
                                  name: data.name,
                                  status: data.status,
                                  age: data.age,
                                  gender: data.gender,
                                  disability: data.disability,
                                  description: data.description,
                                  location: data.location,
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
                                <Text
                                  style={styles.readMore}
                                  onPress={() =>
                                    navigation.navigate("ResolvedCaseDetail", {
                                      data: {
                                        name: data.name,
                                        status: data.status,
                                        age: data.age,
                                        gender: data.gender,
                                        disability: data.disability,
                                        description: data.description,
                                        location: data.location,
                                        image: data.image
                                      }
                                    })
                                  }
                                >
                                  Read More
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
        :
        
        <Text style={{textAlign:'center',fontWeight:'bold',marginTop:30}}>No Case Yet!</Text>
        
        }
        <ImageView
          images={currentImage}
          imageIndex={0}
          onClose={() => this.setState({isImageViewVisible: false})}
          isVisible={isImageViewVisible}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ResolvedCases: state.misingPersons.ResolvedCases,
    clr:state.colorReducer.color
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchScreen);

// missingPersons
