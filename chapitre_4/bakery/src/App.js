import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Add.jsx'
import './components/Button.jsx'
import Button from './components/Button.jsx';
import './components/List.jsx'
import './components/Pay.jsx'



class App extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
    this.onClickFuction = this.onClickFuction.bind(this)
  }

  elem = this.state.activeTab

  onClickFuction(elem) {
    console.log("on ma cliquer")
    console.log(elem);
    // if (this.props.children === "List") {
    //   this.setState({ activeTab: "List" })
    //   // console.log(this.state.activeTab);
    // }
  }


  render() {

    return (
      <div className="App">
        {/*premier appelle */}
        <Button
          onClickFuction={() => this.onClickFuction(elem)}
          isSelected={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"}


        >Add</Button>
        {/*douxeme appelle */}

        <Button
          onClickFuction={() => this.onClickFuction()}
          isSelected={this.state.activeTab === "List" ? "btn btn-primary" : "btn btn-light"}
        >List</Button>
        {/* troisieme appelle */}

        <Button
          onClickFuction={() => this.onClickFuction()}
          isSelected={this.state.activeTab === "Pay" ? "btn btn-primary" : "btn btn-light"}
        >Pay</Button>
      </div>
    );
  }
}


export default App;
