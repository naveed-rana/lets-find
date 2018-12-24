import React, {Component} from 'react';
import { Container} from 'native-base';
import HomeScreen from './src/screens/notificationScreen'

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

      <Container>
        <HomeScreen />
      </Container>
    )

  }
}

