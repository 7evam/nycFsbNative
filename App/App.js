import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';
import TabNav from './config/router';


export default class App extends Component{
  render(){
    return(
      <TabNav />
      )
  }
}

AppRegistry.registerComponent('App', () => App);

