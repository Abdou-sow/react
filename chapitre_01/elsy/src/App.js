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
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000

    }
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)

  }
  onHeartChange(e) {
    this.setState({ heart: e.target.value })
    this.calculateWater()
  }

  onStepsChange(e) {
    this.setState({ steps: e.target.value })
    this.calculateWater()
  }

  onTemperatureChange(e) {
    this.setState({ temperature: e.target.value })
    this.calculateWater()
  }

  calculateWater() {
    let result = 1.5
    if (this.state.heart > 120) {
      result += (0.0008 * (this.state.heart - 120))
    }
    if (this.state.steps > 10000) {
      result += (0.00002 * (this.state.steps - 10000))
    }
    if (this.state.temperature > 20) {
      result += (0.02 * (this.state.temperature - 20))
    }
    result = parseFloat(result.toFixed(2))
    this.setState({ water: result })

  }


  render() {

    return (
      <div className='container-fluid' >
        <div className='row' >
          {/* water */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
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
            onchange={(e) => this.onStepsChange(e)}

          />
          {/* heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onchange={(e) => this.onHeartChange(e)}
          />
          {/* Temperature */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onchange={(e) => this.onTemperatureChange(e)}

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