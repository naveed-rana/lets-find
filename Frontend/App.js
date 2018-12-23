import React, {Component} from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/HomeScreen';
<<<<<<< HEAD
import Login from './src/screens/searchScreen';
=======
import Login from './src/screens/Edit-Profile';
>>>>>>> c5235aadbaf5051ea6862a1d1d19cf6f93c1c7be
import {Content, Container} from 'native-base';

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
      // <Content>    
      //    {SplashScreens ?

      //     <SplashScreen />
      //     :

      //     <Login />
      //       }
      // </Content>
      <Container>
        <Login /> 
      </Container>
    )

  }
}

