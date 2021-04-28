import React from 'react'
import Button from './components/Button.jsx'
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
    // fetch("https://restcountries.eu/rest/v2/name/france")
    //   .then(reponse => reponse.json())
    //   .then(resul => {
    //     const namect = resul[0].name
    //     const populationct = resul[0].population
    //     const capitalct = resul[0].capital
    //     const flagct = resul[0].flag
    //     const regionct = resul[0].region

    //     this.setState({
    //       name: namect,
    //       population: populationct,
    //       capital: capitalct,
    //       flag: flagct,
    //       region: regionct
    //     })

    //   })
  }

  getCountry=(country) => {
    console.log("je suis dans getCountry ");
    const url = "https://restcountries.eu/rest/v2/name/" + country
    fetch(url)
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
      }
      )
  }

  render() {

    // <Button
    // children="france"
    // />
    // <Button
    // children="france"
    // />
    return (
      <div>
        <Button
          children="france" />
        <Button
          children="Brazil" />
        <Button
          children="Croatia" />
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
