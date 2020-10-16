import React, {Component} from 'react';
import configStore from 'airLiquide/src/store/configStore';
import {Provider} from 'react-redux';
import TodoMain from 'airLiquide/src/views/todoMain';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configStore(),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <TodoMain />
      </Provider>
    );
  }
}