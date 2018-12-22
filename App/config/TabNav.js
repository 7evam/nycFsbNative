import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


import Home from '../screens/Home'
import ArtistNav from './ArtistNav'
import VenueNav from './VenueNav'

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: <Icon name="home" size={35} />
    },
  },
  Artists: {
    screen: ArtistNav,
    navigationOptions: {
      tabBarLabel: 'Artists',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color = {tintColor}/>
    },
  },
  Venues: {
  screen: VenueNav,
  navigationOptions: {
    tabBarLabel: 'Venues',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color = {tintColor}/>
  },
},
});

const TabNav = createAppContainer(Tabs);

export default TabNav;
