import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Item, Input,Form } from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
        </Content>            
      </Container>
    );
  }
}