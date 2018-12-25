import React, { Component } from 'react';
import { StatusBar } from 'react-native'
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
  Textarea
} from 'native-base';

import styles from './style';

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
    };
  }

  onSubmit= ()=>{
    console.log('====================================');
    console.log(this.state.name);
    console.log(this.state.gender);
    console.log(this.state.age);
    console.log(this.state.description);
    console.log(this.state.location);
    console.log('====================================');
  }
  
  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="#05ce1d"
          barStyle="light-content"
        />
        <Content>

          <View style={{ alignItems: 'center' }}>
            <View style={styles.topImagecircle}>
              <Thumbnail style={styles.topImageStyle} source={require('../../media/Top-image.png')} />
            </View>

            <View style={styles.btnViewStyle}>
              <Left>
                <Button success rounded>
                  <Text>Missing</Text>
                </Button>
              </Left>
              <Right>
                <Button bordered success rounded>
                  <Text style={{ fontWeight: 'bold' }}>Found</Text>
                </Button>
              </Right>
            </View>
            <View style={styles.inputViewStyle}>
              <Item rounded style={styles.inputStyle}>
                <Input onChangeText={event => this.setState({
                  name: event
                })} placeholder='Name' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input onChangeText={event => this.setState({
                  age: event
                })} placeholder='Age Group' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input 
                onChangeText={event => this.setState({
                  gender: event
                })} placeholder='Gender' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input 
                onChangeText={event => this.setState({
                  location: event
                })} placeholder='Location' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Textarea onChangeText={event => this.setState({
                  description: event
                })} style={styles.txtareaStyle} placeholder="Description" />
              </Item>
            </View>
          </View>
          <Text style={styles.uploadTextStyle}>Upload Photo</Text>
          <View style={styles.bottomStyle}>
            <Thumbnail style={styles.bottomImageStyle} source={require('../../media/upload-photo.png')} />
            <Button full rounded success 
            onPress={this.onSubmit}>
              <Text>Submit & Post</Text>
            </Button>
          </View>
        </Content>

      </Container>
    );
  }
}

