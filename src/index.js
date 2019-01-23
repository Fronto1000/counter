import React from "react";
import ReactDOM from "react-dom";
import Counter from './counter';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import randomstring from 'randomstring';

class App extends React.Component {
  state = {
    counters: []
  }
  deleteCount = (id) => {
    this.setState((prevState) => {
      return {counters: prevState.counters.filter((item) => item.id !== id)}
    });
  }

  addCount = () => {
    this.setState((prevState) => {
      return {counters: [...prevState.counters, {id: randomstring.generate(), value: 0}]};
    })
  };
  
  render() {
    return (
      <div>
        {
          this.state.counters.map((item)=> {return <Counter key={item.id} id={item.id} value={item.value} delete={this.deleteCount}/>})
        }
        <Fab color="primary" onClick={this.addCount}>
          <AddIcon />
        </Fab>
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);