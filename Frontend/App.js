import React, { Component } from 'react';
import MainApp from './src/MainApp';
import { Root } from "native-base";
import store from './src/redux/store';
import { Provider } from 'react-redux';
import Add from './src/screens/ActiveCases'


export default class App extends Component {

  render() {
    return (
      <Root>
      <Provider store={store}>
        {/* <MainApp /> */}
        <Add />
        
      </Provider>
      </Root>
    );
  }
}
