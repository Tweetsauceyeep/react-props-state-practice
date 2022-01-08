import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
    this.resetCount = this.resetCount.bind(this);
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
  resetCount(){
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>increment</button>
        <button onClick={this.countDown}>decrement</button>
        <button onClick={this.resetCount}>reset Count</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default Counter
