import React, { Component } from 'react';
import { Image, Text, View, WebView, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class ShowVenue extends Component{
  render(){

    const { name, desc, img, address, shows } = this.props.navigation.state.params

    return(
     <View style={styles.myView}>
        <Image
        style={{width: 200, height: 200}}
        source={{uri: img}}
        />
        <Text>{desc}</Text>
        <Text>This is where it's at (literally): {address}</Text>
        <Text>Upcoming Shows:</Text>
         {
          shows.map((show) => (
            <Text>{show.link} - {show.date}</Text>
            ))
          }
      </View>
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
