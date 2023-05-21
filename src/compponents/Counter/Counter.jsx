import React, { Component } from "react";
import Controls from "./controls";
import Value from "./values";

class Counter extends Component {
  // дефолтное значение

  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prewState) => ({
      value: prewState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prewState) => ({
      value: prewState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
