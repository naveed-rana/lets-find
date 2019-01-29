import React, { Component } from "react";
import { StatusBar, Alert } from "react-native";
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
  Body,
  Picker,
  Toast,
  ListItem,
  CheckBox
} from "native-base";
import ImagePicker from "react-native-image-picker";
import uploadimageIcon from "../../media/upload-photo.png";
import { connect } from "react-redux";
import { modifyPerson } from "../../redux/actions/missingPersonAction";
import styles from "./style";
import FloatingLabelInput from "../AddForm/floatingLabelInput";
import { resolvedCases } from "../../redux/actions/missingPersonAction";

const options = {
  title: "Select Option",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      gender: "",
      disability: "",
      location: "",
      description: "",
      status: "Missing",
      age: "",
      image: uploadimageIcon,
      value: "",
      MistabBtnCls: this.tabBtn,
      FndtabBtnCls: this.tabBtn,
      resolvedCase: false,
      appColor :'green'
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

  
  confirmation = false;
  resolvedCaseHandler = () => {
    this.state.resolvedCase
      ? this.setState({
          resolvedCase: false
        })
      : Alert.alert(
          this.data.name + "'s Case Resolution",
          "Are your sure to resolve this case",
          [
            {
              text: "Ask me later",
              onPress: () => console.log("Ask me later pressed")
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: () =>
                this.setState({
                  resolvedCase: true,
                  status: "Resolved"
                })
            }
          ],
          { cancelable: true }
        );
  };

  data = this.props.navigation.getParam("data", "NO-Data");


  componentWillReceiveProps(newProp) {
      this.setState({
        appColor:newProp.clr
      });
    }

  componentDidMount() {
    this.setState({
      appColor:this.props.clr,
      name: this.data.name,
      gender: this.data.gender,
      disability: this.data.disability,
      location: this.data.location,
      description: this.data.description,
      status: this.data.status,
      age: this.data.age,
      id: this.data.id,
      image: this.data.image
    });
    if (this.data.status == "Missing") {
      this.setState({
        MistabBtnCls: this.tabBtnColored
      });
    } else {
      this.setState({
        FndtabBtnCls: this.tabBtnColored
      });
    }
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
      id: this.state.id
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
     else if (this.state.image == uploadimageIcon) {
      Toast.show({
        text: "Image is mendatory",
        type: "warning",
        duration: 3000
      });
    }
    else {
      if(this.state.resolvedCase){


        console.log("From react Component: ", data);
        this.props.resolvedCases(data);
        this.props.navigation.navigate("ResolvedCases");
        Toast.show({
          text: "Successfully Resolve This case",
          type: "success",
          duration: 3000
        });
      }else{
        console.log("From react Component: ", data);
        this.props.modifyPerson(data);
        this.props.navigation.navigate("ActiveCases");
        Toast.show({
          text: "Successfully Updated",
          type: "success",
          duration: 3000
        });
      }
    }
  };

  // styles for status buttons

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



  render() {

    const {appColor} = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <StatusBar backgroundColor={appColor} barStyle="light-content" />
        <View>
          <View style={[styles.header,{backgroundColor:appColor}]}>
            <Icon
              onPress={() => navigation.goBack()}
              style={{ fontSize: 30, color: "white" }}
              type="MaterialCommunityIcons"
              name="keyboard-backspace"
            />
            <Text />
            <Text style={styles.heading}>Modify a Post</Text>
            <Text> </Text>
          </View>
        </View>
        <Content>
          <View>
            <ListItem
              style={{marginLeft: 0, paddingLeft: 20}}
              onPress={this.resolvedCaseHandler}
            >
              <CheckBox checked={this.state.resolvedCase} color={appColor} onPress={this.resolvedCaseHandler}/>
              <Body>
                <Text>Mark this case as resolved</Text>
              </Body>
            </ListItem>
          </View>
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
                <Picker.Item label={this.state.age} value={this.state.age} />
                <Picker.Item
                  style={{ color: "white" }}
                  label="Select an age group"
                  value="Select an age group"
                />

                <Picker.Item label="1 to 5" value="1 to 5" />
                <Picker.Item label="6 to 10" value="6 to 10" />
                <Picker.Item label="11 to 15" value="11 to 15" />
                <Picker.Item label="16 to 20" value="16 to 20" />
                <Picker.Item label="21 to 25" value="21 to 25" />
                <Picker.Item label="26 to 30" value="26 to 30" />
                <Picker.Item label="30 to Greater" value="30 to Greater" />
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
                <Picker.Item
                  label={this.state.gender}
                  value={this.state.gender}
                />

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
                  label={this.state.disability}
                  value={this.state.disability}
                />

                <Picker.Item
                  label="Select a Disability if any"
                  value="Select a Disability if any"
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
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyXov49V0vl3zSQGocwgBiOhf-I_iZqlf04-3FDfWnxNG91D64A'}}
                  />
                ) : (
                  <Thumbnail
                    style={styles.bottomFullImg}
                    source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyXov49V0vl3zSQGocwgBiOhf-I_iZqlf04-3FDfWnxNG91D64A'}}
                  />
                )}
              </View>
            </View>
          </Button>
          <View style={styles.inputViewStyle}>
            <Button style={[styles.submitBtn,{backgroundColor:appColor}]} success onPress={this.onSubmit}>
              <Text>Update & Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color
  }
}

export default connect(
  mapStateToProps,
  { modifyPerson, resolvedCases }
)(EditPost);
