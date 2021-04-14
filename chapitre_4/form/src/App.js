import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Form from './components/form.jsx'

class App extends Component {


  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <Form/>
      </div>
    );
  }
}

export default App;
