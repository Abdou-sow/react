import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from'./components/Home.jsx'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <nav>

            <ul>

              <li>
                <Link to="/">home</Link>
              </li>

            </ul>

          </nav>

          <Switch>

            <Route exact path="/" component={Home} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
