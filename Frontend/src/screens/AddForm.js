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

export default class AddForm extends Component {
  
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
              <Thumbnail style={styles.topImageStyle} source={require('../media/Top-image.png')} />
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
                <Input placeholder='Name' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input placeholder='Age Group' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input placeholder='Gender' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Input placeholder='Location' style={styles.inputTextSize} />
              </Item>
              <Item rounded style={styles.inputStyle}>
                <Textarea style={styles.txtareaStyle} placeholder="Description" />
              </Item>
            </View>
          </View>
          <Text style={styles.uploadTextStyle}>Upload Photo</Text>
          <View style={styles.bottomStyle}>
            <Thumbnail style={styles.bottomImageStyle} source={require('../media/upload-photo.png')} />
            <Button full rounded success>
              <Text>Submit & Post</Text>
            </Button>
          </View>
        </Content>

      </Container>
    );
  }
}

const styles = {
  inputTextSize: {
    fontSize: 15
  },
  bottomImageStyle: {
    width: 147,
    height: 143,
    marginBottom: 20
  },
  bottomStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  uploadTextStyle: {
    textAlign: 'left',
    fontSize: 14,
    marginLeft: 50
  },
  txtareaStyle: {
    width: '100%',
    height: 150
  },
  inputViewStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  btnViewStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row'
  },
  topImageStyle: {
    width: 100,
    height: 100
  },
  inputStyle: {
    backgroundColor: '#eff4fb',
    paddingLeft: 10,
    marginBottom: 8,
  },
  topImagecircle: {
    marginTop: 20,
    width: 140,
    height: 140,
    padding: 20,
    borderRadius: 140 / 2,
    backgroundColor: '#05ce1d'
  }
}