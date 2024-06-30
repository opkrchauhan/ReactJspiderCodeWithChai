import React, { Component } from "react";

class ClassBasedIntro extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>
          <h1>ClassBasedIntro</h1>
        </p>
        <p>
          <h2>{this.state.count}</h2>
        </p>
        <p>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            CountIncrement
          </button>
        </p>
      </div>
    );
  }
}

export default ClassBasedIntro;
