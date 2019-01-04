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
  Toast
} from "native-base";
import ImagePicker from "react-native-image-picker";
import uploadimageIcon from "../../media/upload-photo.png";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/missingPersonAction";
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
      name: "",
      gender: "",
      disability: "",
      location: "",
      description: "",
      status: "Missing",
      age: "",
      image: uploadimageIcon,
      value: "",
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
      image: this.state.image
    };

    // if (this.state.age == "" || this.state.age == "Select an age group") {
    //   Toast.show({
    //     text: "Select an age group",
    //     type: "warning",
    //     duration: 3000
    //   });
    // } else if (this.state.gender == "" || this.state.gender == "Gender") {
    //   Toast.show({
    //     text: "Select Gender",
    //     type: "warning",
    //     duration: 3000
    //   });
    // } else if (this.state.disability == "Select a Disability if any") {
    //   Toast.show({
    //     text: "Select a Disability",
    //     type: "warning",
    //     duration: 3000
    //   });
    // } else if (this.state.location == "") {
    //   Toast.show({
    //     text: "Select the Location",
    //     type: "warning",
    //     duration: 3000
    //   });
    // } else if (this.state.image == uploadimageIcon) {
    //   Toast.show({
    //     text: "Image is mendatory",
    //     type: "warning",
    //     duration: 3000
    //   });
    // } else {
    //   console.log("From react Component: ", data);
    //   this.props.addPerson(data);
    //   this.props.navigation.navigate("Home");
    //   Toast.show({
    //     text: "Successfully Uploaded",
    //     type: "success",
    //     duration: 3000
    //   });
    // }

    this.props.addPerson(data);
  };

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
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
          
          <Text style={styles.heading}>Report a Person</Text>
            <Icon name="menu" style={styles.headerIcon} onPress={() => this.openDrawer()} />
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
                    MistabBtnCls: styles.tabBtnColored,
                    FndtabBtnCls: styles.tabBtn
                  })
                }
              >
                {this.state.MistabBtnCls == styles.tabBtn ? (
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
                    FndtabBtnCls: styles.tabBtnColored,
                    MistabBtnCls: styles.tabBtn
                  })
                }
                success
                style={this.state.FndtabBtnCls}
              >
                {this.state.FndtabBtnCls == styles.tabBtn ? (
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
                    source={this.state.image}
                  />
                )}
              </View>
            </View>
          </Button>
          <View style={styles.inputViewStyle}>
            <Button style={styles.submitBtn} success onPress={this.onSubmit}>
              <Text>Submit & Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(
  null,
  { addPerson }
)(AddForm);
