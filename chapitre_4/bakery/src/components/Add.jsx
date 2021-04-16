import React, { Component } from 'react'

class Add extends Component {
    constructor() {
        super()
        this.state = {
            productName: "",
            price: 1,
            min: 1,
            max: 10
        }
    }

    updateProductName = (e) => {
        this.setState({ productName: e.target.value })
    }

    updatePrice = (e) => {
        this.setState({ price: e.target.value })
    }

    render() {
        console.log(this.state.productName);
        console.log(this.state.price);

        return (
            <div>
                <div>
                    <input type="text" onChange={(e) => this.updateProductName(e)} />
                    <button >Add</button>
                </div>
                <div>
                <div>
                    {this.state.price}€
                </div>
                    <input type="range" min={this.state.min} max={this.state.max} onChange={(e) => this.updatePrice(e)} />
                </div>
            </div>

        )
    }
}
export default Add;