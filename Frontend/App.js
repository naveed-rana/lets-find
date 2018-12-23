
import React, { Component } from 'react';
import ShowProfile from './src/screens/ShowProfile';
import { Container } from 'native-base';

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
        {/* <Login /> */}
        <ShowProfile />
      </Container>
    )

  }
}

