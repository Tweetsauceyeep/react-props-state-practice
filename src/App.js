// App.js
import './App.css';
import React, {Component} from 'react';
import Clock from './Clock';
import Counter from './Counter.js'
import ArrayMap from './mapArr'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Clock />
        <Counter/>
        <ArrayMap/>
      </div>
    );
  }
}

export default App;
