import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation'

export default class Home extends Component{

    constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
  }

    componentDidMount(){
    return fetch('http://localhost:3000/api/articles')
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

  render(){
       if(this.state.isLoading){
      return(
        <View style={{flex: 2, padding: 20, backgroundColor: 'purple'}}>
          <ActivityIndicator />
        </View>
        )
    }
    return(
      <SafeAreaView style={styles.myView}>
        {
          this.state.dataSource.map((article) => (
            <View>
            <Text>{article.title}</Text>
            <Image
            style={{width: 200, height: 200}}
            source={{uri: article.img}}
            />
            <Text>{article.content}</Text>
            </View>
          ))
        }
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



