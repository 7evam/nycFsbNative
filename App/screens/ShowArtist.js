import React, { Component } from 'react';
import { Image, Text, View, WebView, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class ShowArtist extends Component{
  render(){

    const { name, desc, img, website, spotify } = this.props.navigation.state.params

    return(
     <View style={styles.myView}>
        <Image
        style={{width: 200, height: 200}}
        source={{uri: img}}
        />
        <Text>{desc}</Text>
        <Text>Check out their website here: {website}</Text>
        <WebView
        source={{uri: `https://open.spotify.com/embed/track/${spotify}`}}
        style={{marginTop: 20, maxHeight: 200, width: 320, flex: 1}}
        />

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

