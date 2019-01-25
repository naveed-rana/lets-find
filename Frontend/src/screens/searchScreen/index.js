import React, { Component } from "react";
import axios from "axios";
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
  Toast,
  Spinner
} from "native-base";
import ImagePicker from "react-native-image-picker";
import styles from "./style";
import EndPoint from '../../endpoint';
import { connect } from "react-redux";
import { search } from "../../redux/actions/SearchAction";


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

      fakeArray: [],
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
    // this.setState({ fakeArray: this.props.SearchStories });
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
    const image = this.state.image;
    console.log("=============from searchby image=======================");
    console.log(image);

    console.log("====================================");
    if (image == "") {
      Toast.show({
        text: "Please Select an image to search",
        type: "warning",
        duration: 3000
      });
    } else {
      this.props.search(image);
      this.setState({
        loader: true
      });

      const data = new FormData();
      data.append('image', {
          uri: this.state.image.uri,
          type: 'image/jpeg',
          name: `${new Date().getTime()}.jpg`,
      });

      this.setState({
        loader: true
      });


      setTimeout(()=>{
        this.setState({
          fakeArray:[{
            id: '6',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWelu5a4sG2AHbTAxpT7w0PXvL_EPDPt1V9g2fRwMNB80OoFNwA',
            status: 'Missing',
            name: 'Faqeeha',
            age: 'teen',
            gender: 'female',
            location: 'Karachi',
            description: 'Act immediately if you believe your child is missing. ... After you have reported your child missing to law enforcement, call the National Center for Missing & Exploited Children at 1-800-THE-LOST(1-800-843-5678). If your child is missing from home, search through: Closets. Piles of laundry.',
            disability: 'mental',
            mobile: '+92 306 7134632',
            post_By: 'Fayyaz'
          }],
          loader: false
        });
      },3000);

      // axios.post(`${EndPoint}/searchbyimage`, data, {
      //     headers: {

      //         'Content-Type': 'multipart/form-data',
      //     },
      // })
      //     .then(res => {
      //         console.log("The Response search by image",res.data.output);
              
      //         this.setState({
      //           loader: false
      //         });
      //         if (res.data.output !== 'no result') {
      //           if (  res.data.output.length >= 1 ) {
      //             this.setState({
      //               fakeArray: res.data.output,
      //               onlineURL:true
      //             });
  
      //           }
      //           else{
      //             this.setState({
      //               onlineURL:false
      //             });
      //           }


      //         }
      //          else{
      //             this.setState({
      //               onlineURL:false
      //             });
      //           }
              

      //     }).catch(err => {
      //       this.setState({loader:false});
      //         console.log("ERROR", err)
      //     });

    }

   

         }
  

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
      // var data = {
      //   image: this.state.image,
      //   name: this.state.searchName,
      //   status: this.state.selectedStatus,
      //   disability: this.state.selectedDisability,
      //   gender: this.state.selectedGender,
      //   age: this.state.selectedAgeGroup,
      //   location: this.state.filterLocation
      // };
      // console.log("=============from search comp=======================");
      // console.log(data);
      // console.log("====================================");

      // this.props.search(data);

      // for only loader checking temporarily
      this.setState({
        loader: true
      });
        
      setTimeout(()=>{
        this.setState({
          fakeArray:[{
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkQrGF9nqavHzqKixGx8o5ITjZ8aqeUAeoh7fJKY0UCuFUfL5',
            status: 'Found',
            name: 'Hamza',
            age: 'teen',
            gender: 'male',
            location: 'Karachi',
            description: 'Missing Child from Gujranwalla',
            disability: 'mental',
            mobile: '+92 306 7134632',
            post_By: 'Naveed'
          },{
            id: '3',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFTXYhqJZV5xv95S5a_KVmIWrE9yVRn7VJ2Mxetlj5wI_vspf',
            status: 'Missing',
            name: 'Hamza Manzoor',
            age: 'teen',
            gender: 'male',
            location: 'Karachi',
            description: 'xyz',
            disability: 'mental',
            mobile: '+92 306 7134632',
            post_By: 'Naveed'
        },
        {
            id: '4',
            image: 'data:image/jpeg;base64,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',
            status: 'Found',
            name: 'Hamza Ali',
            age: 'teen',
            gender: 'male',
            location: 'Karachi',
            description: 'xyz',
            disability: 'mental',
            mobile: '+92 306 7134632',
            post_By: 'Naveed'
        },],
          loader: false
        });
      },3000);

      // let data = {"filters":{
      //   name: this.state.searchName,
      //   status: this.state.selectedStatus,
      //   disability: this.state.selectedDisability,
      //   gender: this.state.selectedGender,
      //   age: this.state.selectedAgeGroup,
      //   location: this.state.filterLocation
      // }}

  
      //   axios.post(EndPoint+'/searchbyfilters',data)
      //   .then((res)=>{

      //     this.setState({ loader: false });
      //       console.log("Res");
      //       console.log(res.data);
            
      //   })
      //   .catch((err)=>{
      //     this.setState({ loader: false });
      //       console.log("err");
      //       console.log(err);
      //   })


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
                      <Picker.Item label="Missing" value="Missing" />
                      <Picker.Item label="Found" value="Found" />
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
            {this.state.fakeArray.length >=1 ?
            <View>
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
                                style={{
                                  flex: 1,
                                  justifyContent: "center"
                                }}
                              >
                                <Image
                                  style={styles.modalImage}
                                  source={{uri:data.image}}
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
            </View>
            :
            <View><Text style={{textAlign:'center',marginTop:100}}>Search Now!</Text></View>
          }
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
    SearchStories: state.SearchReducer.SearchStories
  };
};

export default connect(
  mapStateToProps,
  { search }
)(SearchScreen);
