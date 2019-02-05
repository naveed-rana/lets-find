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
  Input,
  Textarea,
  Header,
  Icon,
  Title,
  Body,
  Picker,
  Label,
  Toast,
  Spinner
} from "native-base";
import ImagePicker from "react-native-image-picker";
import uploadimageIcon from "../../media/upload-photo.png";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/missingPersonAction";
import styles from "./style";
import FloatingLabelInput from "../AddForm/floatingLabelInput";

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
      MistabBtnCls: styles.tabBtnColored,
      FndtabBtnCls: styles.tabBtn
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
    const data = {
      name: this.state.name,
      gender: this.state.gender,
      disability: this.state.disability,
      location: this.state.location,
      description: this.state.description,
      status: this.state.status,
      age: this.state.age,
      image: this.state.image,
      id: Math.random() + 1
    };

    if (this.state.age == "" || this.state.age == "Select an age group") {
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
    } else if (this.state.disability == "Select a Disability if any") {
      Toast.show({
        text: "Select a Disability",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.location == "") {
      Toast.show({
        text: "Select the Location",
        type: "warning",
        duration: 3000
      });
    } 
    // else if (this.state.image == uploadimageIcon) {
    //   Toast.show({
    //     text: "Image is mendatory",
    //     type: "warning",
    //     duration: 3000
    //   });
    // } 
    else {
      this.setState({ loader: true });
      this.props.addPerson(data);
      this.props.navigation.navigate("ActiveCases");
      Toast.show({
        text: "Successfully Uploaded",
        type: "success",
        duration: 3000
      });

      // const data = new FormData();
      //   data.append('image', {
      //       uri: this.state.image.uri,
      //       type: 'image/jpeg',
      //       name: `${this.state.location}_${this.state.age}_${new Date().getTime()}.jpg`,
      //   });

      //   data.append('name',`${this.state.name}`);
      //   data.append('gender',`${this.state.gender}`);
      //   data.append('disability',`${this.state.disability}`);
      //   data.append('location',`${this.state.location}`);
      //   data.append('description',`${this.state.description}`);
      //   data.append('status',`${this.state.status}`);
      //   data.append('age',`${this.state.age}`);
      //   data.append('post_By','Naveed');
      //   data.append('mobile','+923034766669');

      //   axios.post('http://10.123.69.29:2020/registerMissingPerson', data, {
      //       headers: {

      //           'Content-Type': 'multipart/form-data',
      //       },
      //   })
      //       .then(res => {
      //           console.log("The Response", res.data);
      //           Toast.show({
      //             text: "Successfully Uploaded",
      //             type: "success",
      //             duration: 3000
      //           });
      //           this.props.navigation.navigate('Search');
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
    console.log("============from render========================");

    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar backgroundColor="#05CE5D" barStyle="light-content" />
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>FeedBack</Text>
         
         <Text></Text>
         
        </View>

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
                    MistabBtnCls: styles.tabBtnColored,
                    FndtabBtnCls: styles.tabBtn
                  })
                }
              >
                {this.state.MistabBtnCls == styles.tabBtn ? (
                  <Text style={styles.tab}>Issues</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Issues</Text>
                )}
              </Button>
            </Left>
            <Right>
              <Button
                bordered
                onPress={() =>
                  this.setState({
                    status: "Found",
                    FndtabBtnCls: styles.tabBtnColored,
                    MistabBtnCls: styles.tabBtn
                  })
                }
                success
                style={this.state.FndtabBtnCls}
              >
                {this.state.FndtabBtnCls == styles.tabBtn ? (
                  <Text style={styles.tab}>Suggestions</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Suggestions</Text>
                )}
              </Button>
            </Right>
          </View>
          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name: name })}
            />
          </View>

          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Location"
              value={this.state.location}
              onChangeText={location => this.setState({ location: location })}
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


          <Button style={styles.imageInputStyle} onPress={this.uploadImage}>
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={styles.uploadTextStyle}>Upload ScreenShot</Text>
              <View style={styles.bottomStyle}>
                {this.state.image == uploadimageIcon ? (
                  <Thumbnail
                    style={styles.bottomImageStyle}
                    source={this.state.image}
                  />
                ) : (
                  <Thumbnail
                    style={styles.bottomFullImg}
                    source={this.state.image}
                  />
                )}
              </View>
            </View>
          </Button>
          <View style={styles.inputViewStyle}>
            {this.state.loader ? (
              <Button style={styles.submitBtn} onPress={this.onSubmit}>
                <Spinner color="white" />
              </Button>
            ) : (
              <Button style={styles.submitBtn} onPress={this.onSubmit}>
                <Text>Submit</Text>
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
    userStatus: state.userReducer.userStatus,
  };
};
export default connect(
  mapStateToProps,
  { addPerson }
)(AddForm);
