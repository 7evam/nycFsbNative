import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'

export default class Home extends Component{

  render(){

    return(
      <SafeAreaView style={styles.myView}>
        <Text>Hi, welcome home</Text>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
myView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
}
})



