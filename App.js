import React from 'react';
import styled from 'styled-components/native';
import Timer from './Components/Timer';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
