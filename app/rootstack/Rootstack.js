import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator, createTabNavigator} from 'react-navigation';
import {Container, Content, Header, Body, Icon, Thumbnail} from 'native-base';


import splashscreens from '../../src/screens/Splash/splashscreen';
import Register from '../../src/screens/Register/registerscreen';
import listchatscreens from '../../src/screens/TabNavigators/listchatscreens';
import liststatusscreens from '../../src/screens/TabNavigators/liststatuscreens';
import listcallscreens from '../../src/screens/TabNavigators/listcallscreens';

export default class Rootstack extends Component {
    render() {
      return (
        <MyApp />
      );
    }
  }

const MyTab = createTabNavigator({
  ListChat: listchatscreens,
  ListStatus: liststatusscreens,
  ListCall: listcallscreens
})

const MyApp = createStackNavigator({
  splashscreens: splashscreens,
  registerscreen : Register,
  home: MyTab
});