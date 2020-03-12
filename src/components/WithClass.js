import React, { Component } from 'react'

export default class WithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
    document.title = `${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `${this.state.count}`;
  }

  render() {
    return (
      <div>
        <p>You can change title : {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}