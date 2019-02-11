import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StatusBar, Image, Share, Modal, TouchableOpacity } from "react-native";
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
} from "native-base";

import styles from "./style";
import ImageView from 'react-native-image-view';
import {connect} from 'react-redux';

class PersonalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appColor :'green',
      isImageViewVisible: false,
      currentImage:[
        {
            source: {
                uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
            },
        },
    ]
    };
  }

  componentWillReceiveProps(newProp) {
    this.setState({
      appColor:newProp.clr
    });
  }

  componentDidMount() {
    this.setState({ appColor:this.props.clr });
  }

  render() {
    const { navigation } = this.props;
    const {isImageViewVisible,currentImage,appColor} = this.state;
    const data = navigation.getParam("data", "NO-Data");

    return (
      <Container>
        <Header style={{ backgroundColor: appColor }}>
          <StatusBar backgroundColor={appColor} barStyle="light-content" />
          <Left>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{ color: "#fff" }}
              onPress={() => navigation.goBack()}
            />
          </Left>
          <Body>
            <Title>{data.name + " " + data.status} Person </Title>
          </Body>
        </Header>
        <Content>
          <Grid>
            <Row size={50}>
              <Col>
                
                <TouchableOpacity
                   onPress={() =>
                    this.setState({ isImageViewVisible: true,
                      currentImage:
                      [
                        {
                        source: {
                                uri:`${EndPoint}/data/${data.status}/${data.image}`,
                            },
                        },
                    ]
                    })
                  }
                >
                  <View style={styles.imagePadding}>
                    <Image
                      style={styles.imageStyle}
                      source={{uri:`${EndPoint}/data/${data.status}/${data.image}`}}
                    />
                  </View>

                </TouchableOpacity>
              </Col>
              <Col>
                <View style={styles.topDetails}>
                  <Text style={styles.missingPersonTitle}>{data.name}</Text>

                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Age</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>{data.age}</Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Gender</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>
                        {data.gender}
                      </Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Status</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>
                        {data.status}
                      </Text>
                    </Right>
                  </View>
                  <View style={styles.PersonalDetailView}>
                    <Left>
                      <Text style={styles.topLeftAbout}>Disability</Text>
                    </Left>
                    <Right>
                      <Text style={styles.topLeftAboutDetail}>
                        {data.disability}
                      </Text>
                    </Right>
                  </View>
                </View>
              </Col>
            </Row>
            <View style={styles.bottomStyleView}>
              <Text style={styles.ShortLocataionText}>Short Description</Text>
              <Card>
                <CardItem>
                  <Body>
                    <Text style={styles.descripionText}>
                      {data.description}
                    </Text>
                  </Body>
                </CardItem>
              </Card>

              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Left>
                  <Text style={styles.ShortLocataionText}>Location</Text>
                </Left>
                {/* <Button
                  full
                  rounded
                  iconLeft
                  success
                  style={{ backgroundColor: appColor }}
                >
                  <Icon name="map" />
                  <Text uppercase={false}>Look at the map</Text>
                </Button> */}
              </View>

              <Card>
                <CardItem>
                  <Body>
                    <Text style={styles.descripionText}>{data.location}</Text>
                  </Body>
                </CardItem>
              </Card>

              
              <View>
                <Button
                  style={{
                    borderRadius: 5,
                    marginTop: 15,
                    backgroundColor:appColor
                  }}
                  full
                  success
                  onPress={() => {
                    Share.share({
                      message: `*Missing Person Alert* \n Name: *${
                        data.name
                      }* \n Age: *${data.age}* \n Gender: *${
                        data.gender
                      }* \n Disability: *${data.disability}* \n Location: *${
                        data.location
                      }* \n Contact No.: *${data.mobile}*`,
                      url:
                        "http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg",
                      title: "Wow, did you see that?"
                    });
                  }}
                >
                  <Icon
                    style={{ color: "white" }}
                    type="AntDesign"
                    name="sharealt"
                  />
                  <Text uppercase={true} style={{ fontSize: 16 }}>
                    share
                  </Text>
                </Button>
              </View>
            </View>
          </Grid>
        </Content>

        <ImageView
          images={currentImage}
          imageIndex={0}
          onClose={() => this.setState({isImageViewVisible: false})}
          isVisible={isImageViewVisible}
        />

      </Container>
    );
  }
}



const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color
  }
}

export default connect(mapStateToProps,null)(PersonalDetail);