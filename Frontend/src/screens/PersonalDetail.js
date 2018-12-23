import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StatusBar, Image } from 'react-native'
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

export default class PersonalDetail extends Component {

  render() {
    return (
      <Container>
        
        <Header style={{backgroundColor:'#05ce1d'}}>
        <StatusBar
     backgroundColor="#05ce1d"
     barStyle="light-content"
   />
          <Left><Icon name='menu' /></Left>
          <Body>       
            <Title>Abdul Missing Person</Title>
          </Body>
          
        </Header>
        <Content>
          <Grid>
            <Row size={50}>
              <Col>
                <View style={styles.imagePadding}>
                  <Image style={styles.imageStyle} source={require('../media/personel6.jpg')} />
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
                    <Button style={styles.btnBorder} iconLeft success>
                      <Icon name='map' />
                      <Text uppercase={false}>Call poster</Text>
                    </Button>
                  </Left>
                  <Button style={styles.btnBorder} iconLeft success>
                    <Icon name='map' />
                    <Text uppercase={false}>Sms poster</Text>
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

const styles = {
  btnBorder:{
    borderRadius:5
  },
  descripionText:{
    fontSize:14
  },
  ShortLocataionText:{ 
    fontSize: 15, 
    fontWeight: 'bold' 
  },
  bottomStyleView:{ 
    padding: 20, 
    width: '100%' 
  },
  topLeftAboutDetail:{ 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
  topLeftAbout:{ 
    fontSize: 15, 
    color: '#05ce1d' 
  },
  PersonalDetailView:{ 
    flexDirection: 'row', 
    width: '100%' 
  },
  missingPersonTitle:{ 
    textAlign: 'right', 
    fontSize: 17,
    fontWeight:'bold' 
  },
  topDetails:{ 
    paddingHorizontal: 5, 
    paddingVertical: 20, 
    paddingRight: 20 
  },
  imageStyle:{ 
    width: 150, 
    height: 150,
    borderRadius:5 
  },
  imagePadding:{ 
    padding: 20 
  }
}