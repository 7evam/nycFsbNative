import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, ActivityIndicator } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'

export default class Venues extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch('http://localhost:3000/api/venues')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
      });
    })
    .catch((error) => {
      console.error(error)
    });
  }

  onLearnMore = (venue) => {
    this.props.navigation.navigate('Show', venue)
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 2, padding: 20}}>
          <ActivityIndicator />
        </View>
        )
    }

    return(
      <View style={styles.myView}>
        <Text>Here's all the shows </Text>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.dataSource.map((venue) => (
                <ListItem
                  key={venue.id}
                  title={venue.name}
                  avatar={{uri:venue.img}}
                  onPress={() => this.onLearnMore(venue)}
                />
              ))
            }
          </List>
        </View>
      );
  }
}

const styles = StyleSheet.create({
myView: {
  backgroundColor: 'orange',
  paddingTop: '30%'
}
})

