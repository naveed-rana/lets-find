import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StatusBar, Image } from 'react-native';
import Communications from 'react-native-communications';
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
  Header,
  Icon,
  Body,
  Title,
  Card,
  CardItem
} from 'native-base';

import styles from './style';

export default class PersonalDetail extends Component {

  render() {
    return (
      <Container>
        
        <Header style={{backgroundColor:'#05ce1d'}}>
        <StatusBar
          backgroundColor="#05ce1d"
          barStyle="light-content"
        />
          <Left><Icon type="AntDesign" name="arrowleft" style={{ color: "#fff",  }} /></Left>
          <Body>       
            <Title>Abdul Missing Person</Title>
          </Body>
          
        </Header>
        <Content>
          <Grid>
            <Row size={50}>
              <Col>
                <View style={styles.imagePadding}>
                  <Image style={styles.imageStyle} source={require('../../media/personel6.jpg')} />
                </View>
              </Col>
              <Col>
                <View style={styles.topDetails}>
                  <Text style={styles.missingPersonTitle}>Abdul Manan</Text>

                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Post by</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>Naveed</Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Age</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>17</Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Gender</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>Male</Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Status</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>Missing</Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Disability</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>Mental</Text>
                    </Right>
                  </View>
                </View>
              </Col>
            </Row>
            <Row>
              <View style={styles.bottomStyleView}>
                <Text style={styles.ShortLocataionText}>Short Description</Text>
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={styles.descripionText}>
                        Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.
                    </Text>
                    </Body>
                  </CardItem>
                </Card>


                <View style={{ flexDirection: 'row', marginVertical:10 }}>
                  <Left>
                    <Text style={styles.ShortLocataionText}>Location</Text>
                  </Left>
                  <Button full rounded iconLeft success>
                    <Icon name='map' />
                    <Text uppercase={false}>Look at the map</Text>
                  </Button>
                </View>


                <Card>
                  <CardItem>
                    <Body>
                      <Text style={styles.descripionText}>
                        Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.
                    </Text>
                    </Body>
                  </CardItem>
                </Card>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Left>
                    <Button style={styles.btnBorder} iconLeft success onPress={() => Communications.phonecall('0123456789', true)}>
                      <Icon type="FontAwesome" name='phone' />
                      <Text uppercase={true} style={{fontSize:16}} >Call</Text>
                    </Button>
                  </Left>
                  <Button style={styles.btnBorder} iconLeft success onPress={() => Communications.text('0123456789')}>
                    <Icon name='sms' type="MaterialIcons" />
                    <Text uppercase={true} style={{fontSize:16}} >SMS</Text>
                  </Button>
                </View>

              </View>
            </Row>
          </Grid>
        </Content>

      </Container>
    );
  }
}

