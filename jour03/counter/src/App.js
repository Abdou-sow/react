import React from 'react';
import './App.css';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
       count: 0,
       greenColor: "green",
       redColor: "red",
      }
  }
  render() {
    return (
      <div>
        <h1>Conter</h1>
        <h2>{this.state.count}</h2>
        <div>
          <button onClick={this.incrementCount}  style={{backgroundColor :"red"}}>-</button>
          <button onClick={this.incrementCount} style={{backgroundColor :"green"}}>+</button>
        </div>

      </div>
    );
  }
}

export default Home;
