import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Container, Header, Content, Item, Input,Form } from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.loginContainer}>
          <Form>
           <Item>
            <Input placeholder="Username" />
          </Item>
            <Item>
             <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>            
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  loginContainer:{
    justifyContent: 'center',
    flex: 1
  }
})