import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <Item style={{marginTop: 215}} rounded>
            <Input placeholder='Rounded Textbox'/>
          </Item>
        </View>
      </Container>
    );
  }
}