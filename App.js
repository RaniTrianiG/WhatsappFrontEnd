import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Rootstack from './app/rootstack/Rootstack';

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
