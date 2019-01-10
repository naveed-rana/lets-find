import React, { Component } from "react";
import axios from 'axios';
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
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
  Container,
  Picker,
  Form,
  Button,
  Toast,
  Spinner
} from "native-base";
import ImagePicker from "react-native-image-picker";
import styles from "./style";

import EndPoint from '../../endpoint';

import { connect } from "react-redux";
import endpoint from "../../endpoint";

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
      show: false,
      selectedStatus: "",
      selectedDisability: "",
      selectedGender: "",
      selectedAgeGroup: "",
      filterLocation: "",
      image: "",
      searchName: "",
      loader: false,
      onlineURL:false,

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
  toggleFilter = () => {
    const { show } = this.state;
    this.setState(preState => {
      return {
        show: !preState.show
      };
    });
  };

  SearchHandler = () => {
    console.log("=============from searchby image=======================");
    console.log(this.state.image);

    console.log("====================================");
    
    if (this.state.image !== ''){

    const data = new FormData();
        data.append('image', {
            uri: this.state.image.uri,
            type: 'image/jpeg',
            name: `${new Date().getTime()}.jpg`,
        });
           
        this.setState({
          loader: true
        });

        axios.post(`${EndPoint}/searchbyimage`, data, {
            headers: {

                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log("The Response search by image",res.data.output);
                
                this.setState({
                  loader: false
                });
                if (res.data.output !== 'no result') {
                  if (  res.data.output.length >= 1 ) {
                    this.setState({
                      fakeArray: res.data.output,
                      onlineURL:true
                    });
    
                  }
                  else{
                    this.setState({
                      onlineURL:false
                    });
                  }


                }
                 else{
                    this.setState({
                      onlineURL:false
                    });
                  }
                

            }).catch(err => {
              this.setState({loader:false});
                console.log("ERROR", err)
            });

          }

  };

  filterHandler = () => {
    if (
      this.state.selectedStatus == "Status" ||
      this.state.selectedDisability == "Disability" ||
      this.state.selectedGender == "Gender" ||
      this.state.selectedAgeGroup == "Age Group"
    ) {
      this.setState({
        selectedStatus: "",
        selectedDisability: "",
        selectedGender: "",
        selectedAgeGroup: ""
      });
    } else if (
      this.state.selectedStatus == "" &&
      this.state.selectedDisability == "" &&
      this.state.selectedGender == "" &&
      this.state.selectedAgeGroup == "" &&
      this.state.filterLocation == "" &&
      this.state.searchName == ""
    ) {
      Toast.show({
        text: "Select atleast one field",
        type: "warning",
        duration: 3000
      });
    } else {
      console.log("=============from filer hander=======================");
      console.log(this.state.selectedStatus);
      console.log(this.state.selectedDisability);
      console.log(this.state.selectedGender);
      console.log(this.state.selectedAgeGroup);
      console.log(this.state.filterLocation);

      console.log("====================================");
      // for only loader checking temporarily
      this.setState({
        loader: true
      });
      setTimeout(() => {
        this.setState({ loader: false });
      }, 3000);
    }
  };

  render() {
    const {userStatus} = this.props;
    return (
      <Container>
        <View>
          <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
        </View>

        <View style={styles.searchContainer}>
          <Item style={styles.itemStyle1}>
            <TouchableOpacity
              style={styles.searchInput}
              onPress={this.uploadImage}
            >
              <Input
                placeholder="Search By Image"
                editable={false}
                value={this.state.image.uri}
              />
              <TouchableOpacity
                style={styles.cameraIconBtn}
                onPress={this.SearchHandler}
              >
                <Icon style={styles.camIcon} type="AntDesign" name="search1" />
              </TouchableOpacity>
            </TouchableOpacity>
          </Item>
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={this.toggleFilter}
          >  
             {}
            <Image source={require("../../media/Filters.png")} />
          </TouchableOpacity>
          {this.state.show ? (
            <View style={styles.filtersContainer}>
              <Form>
                <View>
                  <Item>
                    <Input
                      placeholder="Search by Name"
                      style={{ color: "#fff" }}
                      placeholderTextColor="#fff"
                      onChangeText={name => this.setState({ searchName: name })}
                    />
                    <Icon
                      active
                      name="map-marked"
                      type="FontAwesome5"
                      style={{ color: "#fff" }}
                    />
                  </Item>

                  <Item>
                    <Input
                      placeholder="Location"
                      style={{ color: "#fff" }}
                      placeholderTextColor="#fff"
                      onChangeText={loaction => {
                        this.setState({
                          filterLocation: loaction
                        });
                      }}
                    />
                    <Icon
                      active
                      name="search-location"
                      type="FontAwesome5"
                      style={{ color: "#fff" }}
                    />
                  </Item>
                </View>
                <View style={styles.selectBoxesContainer}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={
                        <Icon
                          name="ios-arrow-down-outline"
                          style={{ color: "#fff" }}
                        />
                      }
                      style={{ width: "49%", color: "#fff" }}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedStatus}
                      onValueChange={this.onStatusChange.bind(this)}
                    >
                      <Picker.Item label="Status" value="Status" />
                      <Picker.Item label="Missing" value="missing" />
                      <Picker.Item label="Found" value="found" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: "49%", color: "#fff" }}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedDisability}
                      onValueChange={this.onDisabilityChange.bind(this)}
                    >
                      <Picker.Item label="Disability" value="Disability" />
                      <Picker.Item
                        label="Mentally Disable"
                        value="Mentally Disable"
                      />
                      <Picker.Item
                        label="Hearing Loss and Deafness"
                        value="Hearing Loss and Deafness"
                      />
                      <Picker.Item label="Memory Loss" value="Memory Loss" />
                      <Picker.Item
                        label="Speech and Language Disorder"
                        value="Speech and Language Disorder"
                      />
                      <Picker.Item
                        label="Vision Loss and Blindness"
                        value="Vision Loss and Blindness"
                      />
                      <Picker.Item
                        label="Any Physical Disability"
                        value="Any Physical Disability"
                      />
                      <Picker.Item label="Others" value="Others" />
                      <Picker.Item label="Not Disabled" value="Not Disabled" />
                    </Picker>
                  </Item>
                </View>
                <View style={styles.selectBoxesContainer}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={
                        <Icon
                          name="ios-arrow-down-outline"
                          style={{ color: "#fff" }}
                        />
                      }
                      style={{ width: "49%", color: "#fff" }}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedGender}
                      onValueChange={this.onGenderChange.bind(this)}
                    >
                      <Picker.Item label="Gender" value="Gender" />
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{ width: "49%", color: "#fff" }}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedAgeGroup}
                      onValueChange={this.onAgeGroupChange.bind(this)}
                    >
                      <Picker.Item label="Age Group" value="Age Group" />
                      <Picker.Item label="1 to 5" value="1 to 5" />
                      <Picker.Item label="6 to 10" value="6 to 10" />
                      <Picker.Item label="11 to 15" value="11 to 15" />
                      <Picker.Item label="16 to 20" value="16 to 20" />
                      <Picker.Item label="21 to 25" value="21 to 25" />
                      <Picker.Item label="26 to 30" value="26 to 30" />
                      <Picker.Item
                        label="30 to Greater"
                        value="30 to Greater"
                      />
                    </Picker>
                  </Item>
                </View>

                <Button
                  bordered
                  success
                  style={styles.filterBtn}
                  onPress={this.filterHandler}
                >
                  <Text style={{ color: "white" }}>Search</Text>
                </Button>
              </Form>
            </View>
          ) : (
            <View />
          )}
        </View>

        {this.state.loader ? (
          <View>
            <Spinner color="#05CE1D" />
          </View>
        ) : (
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
                                 
                             {this.state.onlineURL? 
                              <Image
             source={{uri:`${endpoint}/data/found/${data.image}`}}
             />
             :
             <Image
             style={styles.filterImage}
             source={require("../../media/sham.jpg")}
           />
             }
                                </View>
                              </View>
                            </Modal>
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({ modalVisible: true })
                              }
                            >

                             {this.state.onlineURL? 
                              <Image
             source={{uri:`${endpoint}/data/found/${data.image}`}}
             />
             :
             <Image
             style={styles.filterImage}
             source={require("../../media/sham.jpg")}
           />
             }
                             
                            </TouchableOpacity>
                          </View>

                          <View style={styles.textContainer}>
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
                                  color: "gray"
                                }}
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
              );
            })}
          </ScrollView>
        )}


            {userStatus ?  
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
              :
              <TouchableOpacity
                style={styles.addNewButton}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Icon
                  type="AntDesign"
                  name="plus"
                  style={{ fontSize: 20, color: "#fff" }}
                  color="white"
                />
              </TouchableOpacity>
              }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStatus:state.userReducer.userStatus,
    missingPersons: state.misingPersons.homeStories
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchScreen);
