import React from 'react';
import Button from '@material-ui/core/Button';

export default class Counter extends React.Component {

state = {
  counter: 0
}

incrementCount = () => {this.setState({counter: this.state.counter + 1})}

decrementCount = () => {this.setState(this.state.counter > 0 ? {counter: this.state.counter - 1} : {counter: 0})}

  render() {
    return (
      <div>
        <Button color="primary" variant="contained" onClick={this.incrementCount}>+</Button>
        <Button>{this.state.counter}</Button>
        <Button color="primary" variant="contained" onClick={this.decrementCount}>-</Button>
      </div>
    );
  }
};