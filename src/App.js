import React, { Component } from 'react';
import View from './View';
import * as axios from 'axios';

class App extends Component {
    constructor() {
    super();

  }
  render() {
    return (
      <div className="App">          
          <View/>
      </div>
    );
  }
}

export default App;
