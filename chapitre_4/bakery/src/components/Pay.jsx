import React, { Component } from 'react'
// import Card from './card';
import Card from './Card.jsx'


class Pay extends Component {
  constructor(){
    super()
    this.state={
      basket:[],
      total:0,
      totalIVA:0,
      totaleEcoTAx:0,
      totalTTC:0
    }
  }

  handleSelect=(name,price)=>{
    console.log('name',name);
    console.log('price',price);
  }
  render() {
    return (
      <div>
        <h1>Pay</h1>
        <div>
          <p>total</p>
        </div>
        {this.props.items.map(elem =>
        
         <Card
         onclick={()=>this.handleSelect()}
         rpoductName={elem.name}
         price={elem.price}
         />
        )}
        {/* <Card
        productName="croissant" 
        /> */}
      </div>
    )
  }
}
export default Pay;