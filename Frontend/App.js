import React, {Component} from 'react';
import Login from './src/screens/signup';
import { Container} from 'native-base';

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      SplashScreens:true
    };
  }
 
  componentDidMount(){

    setTimeout(() => {
      this.setState({SplashScreens:false})
    }, 3000);
  }

  render() {
    const {SplashScreens} = this.state;
    return (

      <Container>
        <Login />
      </Container>
      

    );
  }
}

