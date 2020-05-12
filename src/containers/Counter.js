import React from "react";
import { connect } from "react-redux";
import "./Counter.css";
import { increment, decrement, reset } from "../actions/CounterActions";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <h2 className="count">{this.props.count}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
