// App.js
import React, {Component} from 'react';
import Clock from './Clock'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div className="app">
        <button onClick={this.countUp}>Click Me</button>
        <button onClick={this.countDown}>Click Me -</button>
        <p>{this.state.count}</p>
        <Clock />
      </div>
    );
  }
}

//function App() {
//  return (
//    <div>
//      <MyComponent title="Zamn" />
//      <Child name="Ethan" userId="1298" />
//    </div>
//  );
//}
//
//Child.defaultProps = {
//  title: ['Ethan', 'James', 'Raghav'],
//};
export default App;
