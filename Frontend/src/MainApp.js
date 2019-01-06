import React, { Component } from "react";
import { Container } from "native-base";
// import Setup from './src/navigation-setup/Setup';
import Setup from "./navigation-setup/Setup";
import { PermissionsAndroid } from "react-native";



//redux 
import { getHomeStories } from './redux/actions/missingPersonAction';
import { getUser } from './redux/actions/UserActions';
import { connect } from 'react-redux';




class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SplashScreens: true
    };
  }

  componentDidMount() {

    // this.props.getHomeStories();
    // this.props.getUser();

    setTimeout(() => {
      this.setState({ SplashScreens: false });
    }, 3000);
    this.requestPermission();
  }
  async requestPermission() {
    let per = [];
    per.push(PermissionsAndroid.PERMISSIONS.CAMERA);
    per.push(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    try {
      const granted = await PermissionsAndroid.requestMultiple(per)
        .then(res => {
          console.log("Result" + res);
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { SplashScreens } = this.state;
    return (
      <Container>
        <Setup />
      </Container>
    );
  }
}

export default connect(null,null)(MainApp);