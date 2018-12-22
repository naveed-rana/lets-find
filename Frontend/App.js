import React, {Component} from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/HomeScreen';
<<<<<<< HEAD
import Login from './src/screens/searchScreen';
import {Content, Container} from 'native-base';
=======
import AddForm from './src/screens/AddForm';
>>>>>>> 1b7aca206c0485cbce16ce803700d0ec04435f94

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

