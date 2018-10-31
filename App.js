import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Rootstack from './app/rootstack/Rootstack';
import { Provider } from 'react-redux';
import store from './app/store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Rootstack />
      </Provider>
    );
  }
}
