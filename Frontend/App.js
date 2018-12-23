
import React, {Component} from 'react';
import { View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/HomeScreen';
import Login from './src/screens/signup';
import {Content, Container} from 'native-base';
import HomeScreen from './src/screens/Home'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SplashScreens: true
    };
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ SplashScreens: false })
    }, 3000);
  }

  render() {
    const { SplashScreens } = this.state;
    return (
      // <Content>    
      //    {SplashScreens ?

      //     <SplashScreen />
      //     :

      //     <Login />
      //       }
      // </Content>

      <Container>
        <HomeScreen />
      </Container>
    )

  }
}

