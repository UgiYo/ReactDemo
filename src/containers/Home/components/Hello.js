import React from 'react';
import './Text.css';

export default class Hello extends React.Component {
  state = {
    count: 1,
  };

  addCount = () => {
    this.setState({
      count: this.state.count += 1
    });
  }
  render() {
    const fontColor = {
      color: 'red',
    };

    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>click Me</button>
        <h1 onClick={() => { alert('Hi'); }} style={fontColor}>Hello</h1>
      </div>
    );
  }
}
