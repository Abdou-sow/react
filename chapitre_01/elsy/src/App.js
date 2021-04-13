import React from "react";
import './App.css';
import Box from './components/Box.jsx';

var tempMin = -20
var tempMax = 40
var heartMin = 80
var heartMax = 180
var stepsMin = 0
var stepsMax = 50000

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000

    }
    this.onHeartChange = this.onHeartChange.bind(this)
  }
  onHeartChange(e) {
    // this.state.heart={heart : e.target.value}
    this.setState({ heart: e.target.value })
  }
  render() {
    return (
      <div className='container-fluid' >
        <div className='row' >
          {/* water */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={1.5}
            unit="L"
          />

          {/* steps */}
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onchange={(e)=> this.onHeartChange(e)}

          />
          {/* heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onchange={(e)=> this.onHeartChange(e)}
          />
          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onchange={(e)=> this.onHeartChange(e)}

          />
          <p>
            Heart : 80
            Temperature : -20
            Steps : 0
            </p>
        </div>
      </div>
    );
  }
}

export default App;