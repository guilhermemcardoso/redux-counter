import React, {Component} from 'react';
import allReducers from './src/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './src/components/counter';

const store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
