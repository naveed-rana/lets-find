import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StatusBar, Image, Share } from "react-native";
import Communications from "react-native-communications";
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

export default class PersonalDetail extends Component {
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data", "NO-Data");

    return (
      <Container>
        <Header style={{ backgroundColor: "#05ce1d" }}>
          <StatusBar backgroundColor="#05ce1d" barStyle="light-content" />
          <Left>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{ color: "#fff" }}
              onPress={() => navigation.goBack()}
            />
          </Left>
          <Body>
            <Title>{data.name + " " + data.status} Person</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.imagePadding}>
            <Image
              style={styles.imageStyle}
              source={require("../../media/sham.jpg")}
            />
          </View>

          <View style={styles.topDetails}>
            <View style={styles.PersonalDetailView}>
              <Left>
                <Text style={styles.topLeftAbout}>Name</Text>
              </Left>
              <Right>
                <Text style={styles.missingPersonTitle}>{data.name}</Text>
              </Right>
            </View>
            {/* <View style={styles.PersonalDetailView}>
              <Left>
                <Text style={styles.topLeftAbout}>Post by</Text>
              </Left>
              <Right>
                <Text style={styles.topLeftAboutDetail}>{data.post_By}</Text>
              </Right>
            </View> */}
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
                <Text style={styles.topLeftAboutDetail}>{data.gender}</Text>
              </Right>
            </View>
            <View style={styles.PersonalDetailView}>
              <Left>
                <Text style={styles.topLeftAbout}>Status</Text>
              </Left>
              <Right>
                <Text style={styles.topLeftAboutDetail}>{data.status}</Text>
              </Right>
            </View>
            <View style={styles.PersonalDetailView}>
              <Left>
                <Text style={styles.topLeftAbout}>Disability</Text>
              </Left>
              <Right>
                <Text style={styles.topLeftAboutDetail}>{data.disability}</Text>
              </Right>
            </View>
          </View>

          <View style={styles.bottomStyleView}>
            <Text style={styles.ShortLocataionText}>Short Description</Text>
            <Card>
              <CardItem>
                <Body>
                  <Text style={styles.descripionText}>{data.description}</Text>
                </Body>
              </CardItem>
            </Card>

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <Left>
                <Text style={styles.ShortLocataionText}>Location</Text>
              </Left>
              <Button full rounded iconLeft success>
                <Icon name="map" />
                <Text uppercase={false}>Look at the map</Text>
              </Button>
            </View>

            <Card>
              <CardItem>
                <Body>
                  <Text style={styles.descripionText}>{data.location}</Text>
                </Body>
              </CardItem>
            </Card>
          </View>

            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 2,
                width:"100%",
                marginVertical: 10
              }}
            />

            <View style={styles.PersonalDetailView}>
              <Left>
                <Text style={styles.topLeftAbout}>Posted By</Text>
              </Left>
              <Right>
                <Text style={styles.topLeftAboutDetail}>{data.disability}</Text>
              </Right>
            </View>
            <View style={styles.PersonalDetailView}>
              <Left>
                <Text style={styles.topLeftAbout}>Contect</Text>
              </Left>
              <Right>
                <Text style={styles.topLeftAboutDetail}>{data.disability}</Text>
              </Right>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              
              
              
              
              <Left>
                <Button
                  style={styles.btnBorder}
                  iconLeft
                  success
                  onPress={() =>
                    Communications.phonecall(`${data.mobile}`, true)
                  }
                >
                  <Icon type="FontAwesome" name="phone" />
                  <Text uppercase={true} style={{ fontSize: 16 }}>
                    Call
                  </Text>
                </Button>
              </Left>
              <Button
                style={styles.btnBorder}
                iconLeft
                success
                onPress={() => Communications.text(`${data.mobile}`)}
              >
                <Icon name="sms" type="MaterialIcons" />
                <Text uppercase={true} style={{ fontSize: 16 }}>
                  SMS
                </Text>
              </Button>
              </View>
            <View>
            



              <Button
                style={{ borderRadius: 5, marginTop: 15 }}
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
        </Content>
      </Container>
    );
  }
}
