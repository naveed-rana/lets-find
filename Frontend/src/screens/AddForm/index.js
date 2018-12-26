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
  Picker
} from "native-base";
import ImagePicker from 'react-native-image-picker';
import uploadimageIcon from "../../media/upload-photo.png";
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/missingPersonAction';

import styles from "./style";



const options = {
  title: 'Select Option',
  storageOptions: {
    skipBackup: true,
    path: 'images',

  },
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
      status: true,
      age: "Select an age group",
      image: uploadimageIcon
    };
  }


  uploadImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          image: source,
        });
      }
    });
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

  hadleStatus = () => {
    this.setState(preState => {
      return {
        status: !preState.status
      };
    });
  };

  onSubmit = () => {

    const data = {
      name: this.state.name,
      gender: this.state.gender,
      disability: this.state.disability,
      location: this.state.location,
      description: this.state.description,
      status: "Missing",
      age: this.state.age,
      image: "sham.jpg",
    }

    console.log('Object of Person: ', data);
    this.props.addPerson(data);
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#05CE5D" barStyle="light-content" />
        <View>
          <View style={styles.header}>
            <Icon
              style={{ fontSize: 30, color: "white" }}
              type="MaterialCommunityIcons"
              name="keyboard-backspace"
            />
            <Text />
            <Text style={styles.heading}>Report a Person</Text>
            <Text> </Text>
          </View>
        </View>
        <Content>
          <View style={{ alignItems: "center" }}>
            <View style={styles.btnViewStyle}>
              <Left>
                <Button
                  bordered={!this.state.status}
                  success
                  style={styles.tabBtn}
                >
                  <Text style={styles.tab} onPress={this.hadleStatus}>
                    Missing
                  </Text>
                </Button>
              </Left>
              <Right>
                <Button
                  bordered={this.state.status}
                  success
                  style={styles.tabBtn}
                >
                  <Text style={styles.tab} onPress={this.hadleStatus}>
                    Found
                  </Text>
                </Button>
              </Right>
            </View>
            <View style={styles.inputViewStyle}>
              <Item rounded style={styles.inputStyle}>
                <Input
                  onChangeText={event =>
                    this.setState({
                      name: event
                    })
                  }
                  placeholder="Name"
                  style={styles.inputTextSize}
                />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Picker
                  mode="dropdown"
                  style={{ borderRadius: 20, paddingRight: 100 }}
                  headerStyle={{ backgroundColor: "#b95dd3" }}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
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
              <Item rounded style={styles.inputStyle}>
                {/* <Input
                  onChangeText={event =>
                    this.setState({
                      gender: event
                    })
                  }
                  placeholder="Gender"
                  style={styles.inputTextSize}
                /> */}
                <Picker
                  mode="dropdown"
                  style={{ borderRadius: 20, paddingRight: 10 }}
                  headerStyle={{ backgroundColor: "#b95dd3" }}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
                  selectedValue={this.state.gender}
                  onValueChange={this.onGenderChange.bind(this)}
                >
                  <Picker.Item label="Gender" value="Gender" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Picker
                  mode="dropdown"
                  style={{ borderRadius: 20, paddingRight: 100 }}
                  headerStyle={{ backgroundColor: "#b95dd3" }}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
                  selectedValue={this.state.disability}
                  onValueChange={this.DisabilityHandler.bind(this)}
                >
                  <Picker.Item label="Select a Disability if any" value="Select a Disability if any" />
                  <Picker.Item label="Mentally Disable" value="Mentally Disable" />
                  <Picker.Item label="Hearing Loss and Deafness" value="Hearing Loss and Deafness" />
                  <Picker.Item label="Memory Loss" value="Memory Loss" />
                  <Picker.Item label="Speech and Language Disorder" value="Speech and Language Disorder" />
                  <Picker.Item label="Vision Loss and Blindness" value="Vision Loss and Blindness" />
                  <Picker.Item label="Any Physical Disability" value="Any Physical Disability" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </Item>

              <Item rounded style={styles.inputStyle}>
                <Input
                  onChangeText={event =>
                    this.setState({
                      location: event
                    })
                  }
                  placeholder="Location"
                  style={styles.inputTextSize}
                />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Textarea
                  onChangeText={event =>
                    this.setState({
                      description: event
                    })
                  }
                  style={styles.txtareaStyle}
                  placeholder="Description"
                />
              </Item>
            </View>
          </View>
          <Text style={styles.uploadTextStyle} onPress={this.uploadImage}>Upload Photo</Text>
          <View style={styles.bottomStyle} >
            <Thumbnail
              style={styles.bottomImageStyle}
              source={this.state.image}
            />
            <Button full rounded success onPress={this.onSubmit}>
              <Text>Submit & Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect(null, { addPerson })(AddForm);