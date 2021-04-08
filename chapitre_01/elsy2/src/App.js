import React from "react";
import './App.css';
import Steps from "./components/steps.jsx";
import './styles/global.css'

var tempMin = -20;
var tempMax = 40;
var heartMin = 80
var heartMax = 180
var stepsMin = 0
var stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Steps/>
        <p>
          Heart : 80
          Temperature : -20
          Steps : 0
        </p>

      </div>
    );

  }
}

export default App;
