import React, { Component } from "react";
import { StatusBar, ImageBackground, Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Content
} from "native-base";
import {connect} from 'react-redux';
import { styles } from "./style";

class AboutUs extends Component {

   constructor(props) {
     super(props)
     this.state = {
      appColor :'green'
     }
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
    const {appColor} = this.state;
    return (
      <Container>
        <StatusBar backgroundColor={appColor} barStyle="light-content" />
        <View style={[styles.header,{backgroundColor: appColor}]}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>About Us</Text>
         
         <Text></Text>
         
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardInnerContainer}>
            <Thumbnail large source={require("../../media/logo.png")} />
          </View>
          <View style={styles.AboutApp}>
            <View>
              <Text style={styles.aboutappHeading}>Lets Find</Text>
            </View>
            <View>
              <Text style={styles.aboutappBody}>
                Lets Find is plateform where You can find your persons
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.contactHeadView,{ backgroundColor: appColor}]}>
          <View>
            <Icon
              style={styles.contectIcon}
              type="FontAwesome"
              name="facebook"
            />
          </View>
          <View>
            <Icon style={styles.contectIcon} type="Entypo" name="twitter" />
          </View>
          <View>
            <Icon
              style={styles.contectIcon}
              type="AntDesign"
              name="googleplus"
            />
          </View>
          <View>
            <Icon style={styles.contectIcon} type="Entypo" name="skype" />
          </View>
        </View>

        <View style={styles.creditsContainer}>
          <View>
            <Text>Credits</Text>
          </View>
          <View>
            <Card style={styles.headerCardContainer}>
              <CardItem style={styles.headerCardItem}>
                <Body style={{ borderRadius: 10 }}>
              
                    <View style={styles.cardBody}>
                      <View style={styles.creditorsThumbail}>
                        <Thumbnail
                          large
                          source={require("../../media/Asif.jpg")}
                          style={{width: 70, height: 70}}
                        />
                      </View>
                      <View style={styles.AboutApp}>
                        <View>
                          <Text style={styles.devName}>Muhammad Asif</Text>
                        </View>
                        <View>
                          <Text style={styles.devDescription}>
                            For creating UI and in memory app
                          </Text>
                        </View>
                      </View>
                    </View>
                </Body>
              </CardItem>
            </Card>
          </View>
        </View>
      </Container>
    );
  }
}


const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color,
  }
}

export default connect(mapStateToProps,null)(AboutUs);