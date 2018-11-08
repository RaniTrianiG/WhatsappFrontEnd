import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';



import splashscreens from '../../src/screens/Splash/splashscreen';
import ChatPersonalsScreens from '../../src/screens/ListItems/chatpersonalscreens'
import ChatGroup from '../../src/screens/ListItems/chatgroupscreens'

export default class Rootstack extends Component {
    render() {
      return (
        <MyApp />
      );
    }
  }

const MyApp = createStackNavigator({
    splashscreens: {
    screen: splashscreens
    },
  ChatPersonalsScreens:{
    screen: ChatPersonalsScreens
    },
  },{
    initialRouteName:'ChatPersonalsScreens'
  });

