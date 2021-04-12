import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
       count: 0,
       greenColor: "green",
       redColor: "red",
      }
      this.decrementCount =this.decrementCount.bind(this)
      // this.incrementCount =this.incrementCount.bind(this)

  }
  // decrementCount= () => {
  //    this.setState( {count : this.state.count - 1})
  // }

  //pour utiliser le blind il faut faire ca !!
  // decrementCount(){
  //   this.setState( {count : this.state.count - 1})

  // }

  incrementCount=() =>{
    this.setState( {count : this.state.count + 1})

  }

  render() {
    return (
      <div>
        <h1>Conter</h1>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default Counter ;
