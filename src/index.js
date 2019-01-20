import React from "react";
import ReactDOM from "react-dom";
import Counter from './counter';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class App extends React.Component {
  state = {
    counter: 0
  }
  deleteCount = () => {this.setState(this.state.counter > 0 ? {counter: this.state.counter - 1} : {counter: 0})}

  addCount = () => {this.setState({counter: this.state.counter + 1})}
  
  render() {
    return (
      <div>
        {
          [...new Array(this.state.counter)].map((_, index)=> {return <Counter key={index}/>})
        }
        <Fab color="primary" onClick={this.addCount}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" onClick={this.deleteCount}>
          <DeleteIcon />
        </Fab>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);