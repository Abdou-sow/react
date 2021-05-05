import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MovieInfo from './components/MovieInfo.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        movie: []
    }
}

  componentDidMount() {
    fetch("http://localhost:8001/")
      .then(reponse => reponse.json())
      .then(result => {
        this.setState({ movie: result})
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          <nav>

            <ul>
              {this.state.movie.map(elem =>
                <li><Link to={"/"+elem.id}>{elem.title}</Link></li>
              )}
            </ul>

          </nav>

          <Switch>

            <Route exact path="/:ID" render={(props) =><MovieInfo {...props} movies={this.state.movie}/>}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
