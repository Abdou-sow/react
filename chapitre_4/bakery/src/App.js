import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './components/Add.jsx'
import './components/Button.jsx'
import Button from './components/Button.jsx';
import List from './components/List.jsx'
import Pay from './components/Pay.jsx'



class App extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
  }

  // onClickFuction() {
  //   console.log("on ma cliquer")
  //   var y =document.getElementById("add").textContent
  //   console.log(y);
  //   // if (this.props.children === "List") {
  //   //   this.setState({ activeTab: "List" })
  //   //   // console.log(this.state.activeTab);
  //   // }

  onClickAdd = () => {
    this.setState({ activeTab: "Add" })

  }
  onClickList = () => {
    this.setState({ activeTab: "List" })

  }
  onClickPay = () => {
    this.setState({ activeTab: "Pay" })

  }

  renderONglet() {
    if (this.state.activeTab === "Add") {
      return (
        <div>
          <Add />
        </div>
      )
    }
    if (this.state.activeTab === "List") {
      return (
        <List />
      )
    }
    if (this.state.activeTab === "Pay") {
      return (
        <Pay />
      )
    }

  }


  render() {

    return (
      <div className="App">
        {/*premier appelle */}
        <Button
          onClickFuction={() => this.onClickAdd()}
          isSelected={this.state.activeTab === "Add" ? "btn btn-primary" : "btn btn-light"}
        >Add</Button>


        {/*douxeme appelle */}

        <Button
          onClickFuction={() => this.onClickList()}
          isSelected={this.state.activeTab === "List" ? "btn btn-primary" : "btn btn-light"}
        >List</Button>
        {/* troisieme appelle */}

        <Button
          onClickFuction={() => this.onClickPay()}
          isSelected={this.state.activeTab === "Pay" ? "btn btn-primary" : "btn btn-light"}
        >Pay</Button>

        {this.renderONglet()}

      </div>
    );
  }
}


export default App;
