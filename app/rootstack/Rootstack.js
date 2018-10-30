import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Container, Content, Header, Body, Icon, Thumbnail} from 'native-base';


import splashscreens from '../../src/screens/Splash/splashscreen';
import Register from '../../src/screens/Register/registerscreen';

export default class Rootstack extends Component {
    render() {
      return (
        <MyApp />
      );
    }
  }

const MyApp = createStackNavigator({
  splashscreens: splashscreens,
  registerscreen : Register
});

