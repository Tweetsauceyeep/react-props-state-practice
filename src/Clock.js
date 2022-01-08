import React, {Component} from 'react';
// Clock that updates every second example
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUnmount() {
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date(),
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className = "clock">
        <h2>its currently {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock
