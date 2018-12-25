import React, { Component } from "react";
import { ImageBackground, ScrollView, Image, StatusBar, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Content,
  Item,
  Input,
  Icon,
  Card,
  CardItem,
  Body,
  Button,
  Container
} from "native-base";
import { styles } from './style';

import fakeArray from '../../Redux/fakeArray';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Asif',
      fakeArray: fakeArray,
    };



    console.log('#####################################');
    console.log('Fake Array: ' + this.state.fakeArray[0].name);
  }

  render() {
    return (
      <Container>
        <View>
          <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
        </View>
        <ImageBackground
          source={require("../../media/sham.jpg")}
          style={{ aspectRatio: 1.8 }}
        >
          <View style={styles.header}>
            <Button transparent>
              <Icon
                name="menu" style={styles.searchIcon} />
            </Button>

            <Button transparent>
              <Icon
                onPress={() => this.props.navigation.navigate('Search')}
                type="EvilIcons"
                active
                name="search"
                style={styles.searchIcon}
              />
            </Button>
          </View>
        </ImageBackground>
        {/* {/ Plus Button /} */}
        {/* <Content>
          <Button
            style={{
              backgroundColor: "#05CE1D",
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <Icon
              type="AntDesign"
              name="plus"
              style={{ fontSize: 20 }}
              color="white"
            />
          </Button>
        </Content> */}
        <TouchableOpacity style={styles.addNewButton}>
          <Icon type="AntDesign" name="plus" style={{ fontSize: 20, color: "#fff" }} color="white" />
        </TouchableOpacity>
        {/* PLus Button Ends*/}
        <ScrollView>

          {this.state.fakeArray.map((data, index) => {
            return (

              <View style={styles.cardContainer}>


                <Card>
                  <CardItem>
                    <Body>
                      <View style={styles.cardInnerContainer}>
                        <View>
                          <Image
                            style={styles.filterImage}
                            source={require("../../media/sham.jpg")}
                          />
                        </View>

                        <View style={styles.textContainer}>
                          <View style={styles.cardHeader}>
                            <Text>{data.name}</Text>

                            <Text style={styles.statusText}>{data.type}</Text>
                          </View>

                          <View>
                            <Text style={styles.nameText}>Posted By {data.post_By}</Text>
                          </View>

                          <View style={{ flexDirection: "row", paddingTop: 5 }}>
                            <Icon
                              style={{ marginLeft: -5 }}
                              type="EvilIcons"
                              name="location"
                            />
                            <Text style={{ fontSize: 13 }}>{data.location}</Text>
                          </View>

                          <View style={styles.cardHeader}>
                            <Text style={styles.readMore}>Read More</Text>

                            <Icon
                              style={{ marginTop: -5 }}
                              type="Feather"
                              name="more-horizontal"
                            />
                          </View>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            )
          }
          )}

          {/* {/ start card 2 /} */}

          {/* <View style={styles.cardContainer}>
            <Card>
              <CardItem listItemPadding={0}>
                <Body>
                  <View style={styles.cardInnerContainer}>
                    <View>
                      <Image
                        style={styles.filterImage}
                        source={require("../../media/sham.jpg")}
                      />
                    </View>

                    <View style={styles.textContainer}>
                      <View style={styles.cardHeader}>
                        <Text>Isra ali</Text>

                        <Text style={styles.statusText}>Missing</Text>
                      </View>

                      <View>
                        <Text style={styles.nameText}>Posted By Naveed</Text>
                      </View>

                      <View style={{ flexDirection: "row", paddingTop: 5 }}>
                        <Icon
                          style={{ marginLeft: -5 }}
                          type="EvilIcons"
                          name="location"
                        />
                        <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                      </View>

                      <View style={styles.cardHeader}>
                        <Text style={styles.readMore}>Read More</Text>

                        <Icon
                          style={{ marginTop: -5 }}
                          type="Feather"
                          name="more-horizontal"
                        />
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View> */}

          {/* {/ end card 2 /}

        {/ start card 2 /} */}

          {/* <View style={styles.cardContainer}>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.cardInnerContainer}>
                    <View>
                      <Image
                        style={styles.filterImage}
                        source={require("../../media/sham.jpg")}
                      />
                    </View>

                    <View style={styles.textContainer}>
                      <View style={styles.cardHeader}>
                        <Text>Isra Adil</Text>

                        <Text style={styles.statusText}>Missing</Text>
                      </View>

                      <View>
                        <Text style={styles.nameText}>Posted By Naveed</Text>
                      </View>

                      <View style={{ flexDirection: "row", paddingTop: 5 }}>
                        <Icon
                          style={{ marginLeft: -5 }}
                          type="EvilIcons"
                          name="location"
                        />
                        <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                      </View>

                      <View style={styles.cardHeader}>
                        <Text style={styles.readMore}>Read More</Text>

                        <Icon
                          style={{ marginTop: -5 }}
                          type="Feather"
                          name="more-horizontal"
                        />
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View> */}

          {/* {/ end card 2 /}

        {/ start card 2 /} */}

          {/* <View style={styles.cardContainer}>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.cardInnerContainer}>
                    <View>
                      <Image
                        style={styles.filterImage}
                        source={require("../../media/sham.jpg")}
                      />
                    </View>

                    <View style={styles.textContainer}>
                      <View style={styles.cardHeader}>
                        <Text>Isra Adil</Text>

                        <Text style={styles.statusText}>Missing</Text>
                      </View>

                      <View>
                        <Text style={styles.nameText}>Posted By Naveed</Text>
                      </View>

                      <View style={{ flexDirection: "row", paddingTop: 5 }}>
                        <Icon
                          style={{ marginLeft: -5 }}
                          type="EvilIcons"
                          name="location"
                        />
                        <Text style={{ fontSize: 13 }}>Faisalabad</Text>
                      </View>

                      <View style={styles.cardHeader}>
                        <Text style={styles.readMore}>Read More</Text>

                        <Icon
                          style={{ marginTop: -5 }}
                          type="Feather"
                          name="more-horizontal"
                        />
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View> */}
        </ScrollView>

        {/* {/ end card 2 /} */}
      </Container>
    );
  }
}


