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

import styles from "./style";

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      age: "",
      location: "",
      description: "",
      image: "",
      status: true,
      selected: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
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
    console.log("====================================");
    console.log(this.state.name);
    console.log(this.state.gender);
    console.log(this.state.age);
    console.log(this.state.description);
    console.log(this.state.location);
    console.log("====================================");
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
          </View>
        </View>
        <Content>
          <View style={{ alignItems: "center" }}>
            <View style={styles.btnViewStyle}>
              <Left>
                <Button bordered={!this.state.status} success rounded>
                  <Text style={styles.tab} onPress={this.hadleStatus}>
                    Missing
                  </Text>
                </Button>
              </Left>
              <Right>
                <Button bordered={this.state.status} success rounded>
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
                {/* <Input
                  onChangeText={event =>
                    this.setState({
                      age: event
                    })
                  }
                  placeholder="Age Group"
                  style={styles.inputTextSize}
                /> */}
                <Picker
                  mode="dropdown"
                  style={{ borderRadius: 20, paddingRight: 10 }}
                  headerStyle={{ backgroundColor: "#b95dd3",}}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item
                    style={styles.picItem}
                    label="Wallet"
                    value="key0"
                  />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input
                  onChangeText={event =>
                    this.setState({
                      gender: event
                    })
                  }
                  placeholder="Gender"
                  style={styles.inputTextSize}
                />
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
          <Text style={styles.uploadTextStyle}>Upload Photo</Text>
          <View style={styles.bottomStyle}>
            <Thumbnail
              style={styles.bottomImageStyle}
              source={require("../../media/upload-photo.png")}
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
