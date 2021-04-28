import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(reponse => reponse.json())
      .then(resul => {
        const namect = resul[0].name
        const populationct = resul[0].population
        const capitalct = resul[0].capital
        const flagct = resul[0].flag
        const regionct = resul[0].region

        this.setState({
          name: namect,
          population: populationct,
          capital: capitalct,
          flag: flagct,
          region: regionct
        })

      })
  }
  render() {
    return (
      <div>
        <div>
          name = {this.state.name}
        </div>
        <div>
          capital = {this.state.capital}
        </div>
        <div>
          flag = {this.state.flag}
        </div>
        <div>
          population = {this.state.population}
        </div>
        <div>
          region = {this.state.region}
        </div>
      </div>
    );
  }
}

export default App;
