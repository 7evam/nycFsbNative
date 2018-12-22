import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabNav from './TabNav'
import Venues from '../screens/Venues'
import ShowVenue from '../screens/ShowVenue'

const VenueStack = createStackNavigator({
  Venues: {
    screen: Venues,
  },
  Show: {
    screen: ShowVenue,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
    }),
  },
})

const VenueNav = createAppContainer(VenueStack);

export default VenueNav;
