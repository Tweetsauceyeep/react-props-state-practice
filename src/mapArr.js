import React, {Component} from 'react';

class ArrayMap extends Component {
  render() {
    return (
      <div>
        {this.props.array.map((item, i) => {
          return <h1>{`Student${i + 1}: ${item}`}</h1>;
        })}
      </div>
    );
  }
}

ArrayMap.defaultProps = {
  array: ['ethan', 'james', 'sia', 'ayo', 'wassup', 'pullup'],
};

export default ArrayMap;
