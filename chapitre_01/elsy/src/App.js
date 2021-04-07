import React from "react";
import './App.css';
import Box from './components/Box.jsx';
import './styles/global.css'
var tempMin = -20
var tempMax = 40
var heartMin = 80
var heartMax = 180
var stepsMin = 0
var stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid' >
        <div className='row' >
          {/* water */}
          <Box
          icon ="local_drink"
          color ="#3A85FF"
          value = {1.5}
          unit ="L"
          />
          {/* steps */}
          <Box/>
          {/* heart */}
          <Box/>
          {/* Temperature */}
          <Box/>
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