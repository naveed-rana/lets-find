import React, {Component} from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/HomeScreen';
import PersonalDetail from './src/screens/PersonalDetail';

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
         <PersonalDetail />
    );
  }
}

