import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabNav from './TabNav'
import Artists from '../screens/Artists'
import ShowArtist from '../screens/ShowArtist'

const ArtistStack = createStackNavigator({
  Artists: {
    screen: Artists,
  },
  Show: {
    screen: ShowArtist,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    }),
  },
})

const ArtistNav = createAppContainer(ArtistStack);

export default ArtistNav;
