import React from 'react'
import Button from './components/Button.jsx'
import Card from './components/card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
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

  getCountry1 = (contry) => {
    fetch("http://localhost:8000/countries")
      .then(reponse => reponse.json())
      .then(resul => {
        const namect = resul[0].contry.name
        const populationct = resul[0].contry.population
        const capitalct = resul[0].contry.capital
        const flagct = resul[0].contry.flag
        const regionct = resul[0].contry.region

        console.log("namect",namect);

        // this.setState({
        //   name: namect,
        //   population: populationct,
        //   capital: capitalct,
        //   flag: flagct,
        //   region: regionct
        // })
      }
      )
  }

  getCountry = (country) => {
    // console.log("je suis dans getCountry ");
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
    return (
      <div style={{ textAlign: "center", border: 'solid', borderColor: '#efebeb', width: "max-content", marginLeft: '42%', height: 325 }}>
        <h1>Country selector</h1>
        <Button
          onClick={() => this.getCountry1("france")}
          children="france" />
        <Button
          onClick={() => this.getCountry1("Brazil")}
          children="Brazil" />
        <Button
          onClick={() => this.getCountry1("Croatia")}
          children="Croatia" />
        <Card
          name={this.state.name}
          capital={this.state.capital}
          flag={this.state.flag}
          population={this.state.population}
          region={this.state.region} />
      </div>
    );
  }
}

export default App;
