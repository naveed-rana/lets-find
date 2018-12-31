import React, { Component } from 'react';
import MainApp from './src/MainApp';
import store from './src/redux/store';
import { Provider } from 'react-redux';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainApp />
        
      </Provider>
    );
  }
}
