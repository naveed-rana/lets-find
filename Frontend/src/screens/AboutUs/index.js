import React, { Component } from "react";
import { StatusBar, ImageBackground } from "react-native";
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
  Text
} from "native-base";
import { styles } from "./style";
import { ScrollView } from "react-native-gesture-handler";

export default class HeaderIconExample extends Component {
  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#05CE5D" barStyle="light-content" />
        <View style={styles.header}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>About Us</Text>
          <Icon
            name="menu"
            style={styles.headerIcon}
            onPress={() => this.openDrawer()}
          />
        </View>
        <ImageBackground
          source={require("../../media/Aboutus.jpg")}
          style={{ width: "100%", shadowOpacity: 1 }}
        >
          <ScrollView>
            <View style={styles.aboutusContentView}>
              <Text style={styles.aboutusContent}>
                A missing person is a person who has disappeared and whose
                status as alive or dead cannot be confirmed as his or her
                location and fate are not known. A person may go missing through
                a voluntary disappearance, or else due to an accident, crime,
                death in a location where they cannot be found (such as at sea),
                or many other reasons. In most parts of the world, a missing
                person will usually be found quickly. While criminal abductions
                are some of the most widely reported missing person cases, these
                account for only 2–5% of missing children in Europe. By
                contrast, some missing person cases remain unresolved for many
                years. Laws related to these cases are often complex since, in
                many jurisdictions, relatives and third parties may not deal
                with a person's assets until their death is considered proven by
                law and a formal death certificate issued. The situation,
                uncertainties, and lack of closure or a funeral resulting when a
                person goes missing may be extremely painful with long-lasting
                effects on family and friends. A number of organizations seek to
                connect, share best practices, and disseminate information and
                images of missing children to improve the effectiveness of
                missing children investigations, including the International
                Centre for Missing & Exploited Children (ICMEC), as well as
                national centers, including the National Center for Missing &
                Exploited Children in the US, Missing People in the UK, Child
                Focus in Belgium, and The Smile of the Child in Greece.
              </Text>
              <Text></Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}
