import React, { Component } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  Container,
  Content,
  Thumbnail,
  Button,
  Left,
  Right,
  Item,
  Icon,
  Picker,
  Toast,
  Spinner
} from "native-base";
import ImagePicker from "react-native-image-picker";
import uploadimageIcon from "../../media/upload-photo.png";
import { connect } from "react-redux";
import { 
  addPerson,
  getHomeStories,
  getNotifications,
  registerMissingPerson,
  resetRegisterMissingPersonStatus
} from "../../redux/actions/missingPersonAction";
import styles from "./style";
import FloatingLabelInput from "./floatingLabelInput";

const options = {
  title: "Select Option",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appColor:'green',
      name: "",
      gender: "",
      disability: "",
      location: "",
      description: "",
      status: "Missing",
      age: "",
      image: uploadimageIcon,
      value: "",
      loader: false,
      MistabBtnCls: this.tabBtnColored,
      FndtabBtnCls: this.tabBtn
    };
  }

  componentDidMount() {
    this.setState({appColor:this.props.clr });
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.registerMissingPersonStatus == "done") {
      Toast.show({
        text: "Successfully Uploaded",
        type: "success",
        duration: 3000
      });
      this.props.addPerson({
        name: this.state.name,
        gender: this.state.gender,
        disability: this.state.disability,
        location: this.state.location,
        description: this.state.description,
        status: this.state.status,
        age: this.state.age,
        image: this.state.image,
        id: Math.random() + 1
      });
      this.props.resetRegisterMissingPersonStatus();
      this.props.navigation.navigate('Homes');
    } else if(nextProps.registerMissingPersonStatus == "error") {
      Toast.show({
        text: "Error Occurred",
        type: "error",
        duration: 3000
      });
      this.setState({
        loader: false
      });
      this.props.resetRegisterMissingPersonStatus();
    }
    this.setState({appColor:nextProps.clr});   
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
        this.setState({
          image: response.uri
        });
      }
    });
  };


  // css classes for status buttons

  clr = this.props.clr

  tabBtn= {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    color: this.clr
  }
  
  tabBtnColored= {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: this.clr,
    color: "white"
  }


  onValueChange(value) {
    this.setState({
      age: value
    });
  }

  onGenderChange(value) {
    this.setState({
      gender: value
    });
  }

  DisabilityHandler(value) {
    this.setState({
      disability: value
    });
  }

  onSubmit = () => {
    // const userDatadata = {
    //   name: this.state.name,
    //   gender: this.state.gender,
    //   disability: this.state.disability,
    //   location: this.state.location,
    //   description: this.state.description,
    //   status: this.state.status,
    //   age: this.state.age,
    //   image: this.state.image,
    //   id: Math.random() + 1
    // };

    if (this.state.name == "" && this.state.status == "Missing") {
      Toast.show({
        text: "Enter person's name",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.location == "") {
      Toast.show({
        text: "Enter the location",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.description == "") {
      Toast.show({
        text: "Enter the description",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.age == "" || this.state.age == "Select an age group") {
      Toast.show({
        text: "Select an age group",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.gender == "" || this.state.gender == "Gender") {
      Toast.show({
        text: "Select Gender",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.disability == "Select disability if any") {
      Toast.show({
        text: "Select a Disability",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.image == uploadimageIcon) {
      Toast.show({
        text: "Image is mendatory",
        type: "warning",
        duration: 3000
      });
    } else {
      this.setState({ loader: true });
      const data = new FormData();
        data.append('image', {
            uri: this.state.image,
            type: 'image/jpeg',
            name: `${this.state.location}_${this.state.age}_${new Date().getTime()}.jpg`,
        });
        data.append('name',`${this.state.name}`);
        data.append('gender',`${this.state.gender}`);
        data.append('disability',`${this.state.disability}`);
        data.append('location',`${this.state.location}`);
        data.append('description',`${this.state.description}`);
        data.append('status',`${this.state.status}`);
        data.append('age',`${this.state.age}`);
        data.append('post_By',`${this.props.user.name}`);
        data.append('mobile',`${this.props.user.cell}`);
        console.log("Component Data: ", data);
        this.props.registerMissingPerson(data);
    //     axios.post(`${EndPoint}/registerMissingPerson`, data, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     }).then(res => {
    //         console.log("The Response", res.data);
    //         Toast.show({
    //           text: "Successfully Uploaded",
    //           type: "success",
    //           duration: 3000
    //         });
    //         this.props.addPerson(userDatadata);
    //         // this.props.getHomeStories();
    //         console.log(res.data.output);
    //         this.props.getNotifications(res.data.output);
    //         this.props.navigation.navigate('Homes');
    //       }).catch(err => {
    //         this.setState({loader:false});
    //           console.log("ERROR", err)
    //           Toast.show({
    //             text: "Error Occoured",
    //             type: "error",
    //             duration: 3000
    //           });
    //       });
    }
  };

  

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    const {appColor} = this.state;
    const { navigation } = this.props;
    
    return (
      <Container>
        <StatusBar backgroundColor={appColor} barStyle="light-content" />
        <View style={[styles.header,{ backgroundColor: appColor}]}>
          {/* <Icon
            onPress={() => navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          /> */}
           
           <Text></Text>
           

          <Text style={styles.heading}>Report a Person</Text>
         
         <Text></Text>
         
        </View>

        {/* <View>
          <View style={styles.header}>
            
            <Text />
            <Text style={styles.heading}>Report a Person</Text>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name="menu" style={styles.searchIcon} />
            </Button>
          </View>
        </View> */}
        <Content>
          <View style={styles.btnViewStyle}>
            <Left>
              <Button
                bordered
                success
                style={this.state.MistabBtnCls}
                onPress={() =>
                  this.setState({
                    status: "Missing",
                    MistabBtnCls: this.tabBtnColored,
                    FndtabBtnCls: this.tabBtn
                  })
                }
              >
                {this.state.MistabBtnCls == this.tabBtn ? (
                  <Text style={styles.tab}>Missing</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Missing</Text>
                )}
              </Button>
            </Left>
            <Right>
              <Button
                bordered
                onPress={() =>
                  this.setState({
                    status: "Found",
                    FndtabBtnCls: this.tabBtnColored,
                    MistabBtnCls: this.tabBtn
                  })
                }
                success
                style={this.state.FndtabBtnCls}
              >
                {this.state.FndtabBtnCls == this.tabBtn ? (
                  <Text style={styles.tab}>Found</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Found</Text>
                )}
              </Button>
            </Right>
          </View>
          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name: name.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ') })}
            />
          </View>

          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Location"
              value={this.state.location}
              onChangeText={location => this.setState({ location: location.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ') })}
            />
          </View>

          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Description"
              value={this.state.description}
              onChangeText={description =>
                this.setState({ description: description })
              }
            />
          </View>

          <View style={styles.inputViewStyle}>
            <Item last style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                style={{
                  borderWidth: 1,
                  borderWidth: 1,
                  borderColor: "#dadce0"
                }}
                selectedValue={this.state.age}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item
                  label="Select an age group"
                  value="Select an age group"
                />
                <Picker.Item label="1 to 5" value="1 to 5" />
                <Picker.Item label="6 to 10" value="6 to 10" />
                <Picker.Item label="11 to 15" value="11 to 15" />
                <Picker.Item label="16 to 20" value="16 to 20" />
                <Picker.Item label="21 to 25" value="21 to 25" />
                <Picker.Item label="26 to 30" value="26 to 30" />
                <Picker.Item label="31 to 35" value="31 to 35" />
                <Picker.Item label="36 to 40" value="36 to 40" />
                <Picker.Item label="41 to 45" value="41 to 45" />
                <Picker.Item label="46 or older" value="46 or older" />
              </Picker>
            </Item>
          </View>

          <View style={styles.inputViewStyle}>
            <Item last style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                style={{ borderRadius: 20, paddingRight: 10 }}
                selectedValue={this.state.gender}
                onValueChange={this.onGenderChange.bind(this)}
              >
                <Picker.Item label="Gender" value="Gender" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </Item>
          </View>
          <View style={styles.inputViewStyle}>
            <Item last style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                style={{ borderRadius: 20, paddingRight: 100 }}
                selectedValue={this.state.disability}
                onValueChange={this.DisabilityHandler.bind(this)}
              >
                <Picker.Item
                  label="Select disability if any"
                  value="Select disability if any"
                />
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

          <Button style={styles.imageInputStyle} onPress={this.uploadImage}>
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={styles.uploadTextStyle}>Upload Photo</Text>
              <View style={styles.bottomStyle}>
                {this.state.image == uploadimageIcon ? (
                  <Thumbnail
                    style={styles.bottomImageStyle}
                    source={this.state.image}
                  />
                ) : (
                  <Thumbnail
                    style={styles.bottomFullImg}
                    source={{uri:this.state.image}}
                  />
                )}
              </View>
            </View>
          </Button>
          <View style={styles.inputViewStyle}>
            {this.state.loader ? (
              <Button style={[styles.submitBtn,{ backgroundColor: appColor}]}>
                <Spinner color="white" />
              </Button>
            ) : (
              <Button style={[styles.submitBtn,{ backgroundColor: appColor}]} onPress={this.onSubmit}>
                <Text>Submit & Post</Text>
              </Button>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loader: state.missingPersons.loader,
    userStatus: state.userReducer.userStatus,
    clr: state.colorReducer.color,
    user: state.userReducer.user,
    registerMissingPersonStatus: state.missingPersons.registerMissingPersonStatus,
  };
};

export default connect(
  mapStateToProps,
  { 
    addPerson,
    getHomeStories,
    getNotifications,
    registerMissingPerson,
    resetRegisterMissingPersonStatus
  }
)(AddForm);