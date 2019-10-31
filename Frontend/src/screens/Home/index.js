import React, { Component } from "react"
import { ImageBackground, ScrollView, Image, StatusBar, TouchableOpacity, Share, View as RNView, Platform, Dimensions } from "react-native"
import { View, Text, Icon, Card, CardItem, Body, Container, Drawer, Button, Spinner } from "native-base"

import { Grid, Col } from "react-native-easy-grid"
import Carousel from "react-native-carousel-view"

import { styles1 } from "./style"
import { connect } from "react-redux"
import ImageView from "react-native-image-view"
import EndPoint from "../../endpoint"
import styles from "./sliderCSS.js"

Drawer.defaultProps.styles.mainOverlay.elevation = 0

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appColor: "#05CE1D",
      missingPersons: [],
      loader: true,
      isImageViewVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      missingPersons: nextProps.missingPersons,
      loader: false
    })
  }

  componentDidMount() {
    this.setState({
      appColor: this.props.clr
    })
  }

  openDrawer = () => {
    this.props.navigation.toggleDrawer()
  }

  // For loader temporary

  render() {
    console.log("missing persons lists is here *****", this.props.missingPersons)
    const deviceWidth = Dimensions.get("window").width
    const { userStatus } = this.props
    const { isImageViewVisible, currentImage, appColor } = this.state

    return (
      <Container>
        <View>
          <StatusBar backgroundColor={appColor} barStyle='light-content' />
        </View>

        <View>
          <Carousel width={deviceWidth} height={250} indicatorAtBottom indicatorSize={Platform.OS === "android" ? 15 : 10} indicatorColor='#FFF' indicatorOffset={10} indicatorSize={10} delay={5000} loop={true}>
            <RNView>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate("Story")} style={styles.slide}>
                <ImageBackground style={styles.newsPoster} source={require("../../media/a.jpg")}>
                  <Button transparent style={{ position: "absolute", top: 7 }} transparent onPress={() => this.openDrawer()}>
                    <Icon name='menu' style={{ color: "#fff", fontSize: 30 }} />
                  </Button>
                  <Button style={{ position: "absolute", top: 10, right: 5 }} transparent>
                    <Icon onPress={() => this.props.navigation.navigate("Search")} type='EvilIcons' active name='search' style={{ color: "#fff", fontSize: 25 }} />
                  </Button>

                  <View style={styles.swiperTextContent}>
                    <Text numberOfLines={2} style={[styles.newsPosterHeader, { color: "#fff", fontSize: 18 }]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
            <RNView>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate("Story")} style={styles.slide}>
                <ImageBackground style={styles.newsPoster} source={require("../../media/a1.jpg")}>
                  <Button transparent style={{ position: "absolute", top: 7 }} transparent onPress={() => this.openDrawer()}>
                    <Icon name='menu' style={{ color: "#fff", fontSize: 30 }} />
                  </Button>
                  <Button style={{ position: "absolute", top: 10, right: 5 }} transparent>
                    <Icon onPress={() => this.props.navigation.navigate("Search")} type='EvilIcons' active name='search' style={{ color: "#fff", fontSize: 25 }} />
                  </Button>

                  <View style={styles.swiperTextContent}>
                    <Text numberOfLines={2} style={[styles.newsPosterHeader, { color: "#fff", fontSize: 18 }]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
            <RNView>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate("Story")} style={styles.slide}>
                <ImageBackground style={styles.newsPoster} source={require("../../media/a3.jpg")}>
                  <Button transparent style={{ position: "absolute", top: 7 }} transparent onPress={() => this.openDrawer()}>
                    <Icon name='menu' style={{ color: "#fff", fontSize: 30 }} />
                  </Button>
                  <Button style={{ position: "absolute", top: 10, right: 5 }} transparent>
                    <Icon onPress={() => this.props.navigation.navigate("Search")} type='EvilIcons' active name='search' style={{ color: "#fff", fontSize: 25 }} />
                  </Button>
                  <View style={styles.swiperTextContent}>
                    <Text numberOfLines={2} style={[styles.newsPosterHeader, { color: "#fff", fontSize: 18 }]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
          </Carousel>
        </View>

        {/* PLus Button Ends*/}

        <Text style={{ color: appColor, fontWeight: "bold", marginLeft: 11 }}>Recent Stories</Text>

        {this.state.loader ? (
          <Spinner style={{ marginTop: 30 }} color={appColor} />
        ) : this.state.missingPersons.length == 0 ? (
          <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 30 }}>No Stories Yet</Text>
        ) : (
          <ScrollView>
            {this.state.missingPersons.map((data, index) => {
              return (
                <View key={index} style={styles1.cardContainer}>
                  <Card>
                    <CardItem>
                      <Body>
                        <View style={styles1.cardInnerContainer}>
                          <View>
                            {/* here model  */}

                            <TouchableOpacity
                              onPress={() =>
                                this.setState({
                                  isImageViewVisible: true,
                                  currentImage: [
                                    {
                                      source: {
                                        uri: `${EndPoint}/data/${data.status}/${data.image}`
                                      }
                                    }
                                  ]
                                })
                              }>
                              <Image
                                style={styles1.filterImage}
                                source={{
                                  uri: `${EndPoint}/data/${data.status}/${data.image}`
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                          <View style={styles1.textContainer}>
                            <TouchableOpacity
                              style={{ width: "100%" }}
                              onPress={() =>
                                this.props.navigation.navigate("PersonDetail", {
                                  data: {
                                    id: data.id,
                                    name: data.name,
                                    status: data.status,
                                    post_By: data.post_By,
                                    age: data.age,
                                    gender: data.gender,
                                    disability: data.disability,
                                    description: data.description,
                                    location: data.location,
                                    mobile: data.mobile,
                                    image: data.image
                                  }
                                })
                              }>
                              <View style={styles1.cardHeader}>
                                <Text>{data.name}</Text>

                                <Text style={{ color: appColor }}>{data.status}</Text>
                              </View>

                              <View>
                                <Text style={styles1.nameText}>Posted by {data.post_By}</Text>
                              </View>

                              <View
                                style={{
                                  flexDirection: "row",
                                  paddingTop: 5
                                }}>
                                <Icon style={{ marginLeft: -5 }} type='EvilIcons' name='location' />
                                <Text style={{ fontSize: 13 }}>{data.location}</Text>

                                <Icon
                                  style={{
                                    fontSize: 14,
                                    marginLeft: 6,
                                    marginTop: 1,
                                    marginRight: 2
                                  }}
                                  name='md-time'
                                  type='Ionicons'
                                />

                                <Text style={{ fontSize: 12 }}>{data.createdat}</Text>
                              </View>

                              <View style={styles1.cardHeader}>
                                <Text
                                  style={styles1.readMore}
                                  onPress={() =>
                                    this.props.navigation.navigate("PersonDetail", {
                                      data: {
                                        id: data.id,
                                        name: data.name,
                                        status: data.status,
                                        post_By: data.post_By,
                                        age: data.age,
                                        gender: data.gender,
                                        disability: data.disability,
                                        description: data.description,
                                        location: data.location,
                                        mobile: data.mobile,
                                        image: data.image
                                      }
                                    })
                                  }>
                                  Read More
                                </Text>

                                <Icon
                                  onPress={() => {
                                    Share.share({
                                      message: `*Missing Person Alert* \n Name: *${data.name}* \n Age: *${data.age}* \n Gender: *${data.gender}* \n Disability: *${data.disability}* \n Location: *${data.location}* \n Contact No.: *${data.mobile}*`,
                                      url: "http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg",
                                      title: "Wow, did you see that?"
                                    })
                                  }}
                                  style={styles1.shareIcon}
                                  type='AntDesign'
                                  name='sharealt'
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                </View>
              )
            })}
          </ScrollView>
        )}

        <ImageView images={currentImage} imageIndex={0} onClose={() => this.setState({ isImageViewVisible: false })} isVisible={isImageViewVisible} />
      </Container>
      // </Drawer>
    )
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus,
    missingPersons: state.missingPersons.homeStories,
    loader: state.missingPersons.loader,
    clr: state.colorReducer.color
  }
}

export default connect(
  mapStateToProps,
  null
)(Home)
