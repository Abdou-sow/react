import React from 'react'


class Card extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <div>
                    <img style={{height:100, with:150}} src={this.props.flag}/>
                </div>
                <div>
                    name = {this.props.name}
                </div>
                <div>
                    capital = {this.props.capital}
                </div>
                <div>
                    region = {this.props.region}
                </div>
                <div>
                    population = {this.props.population}
                </div>
            </div>
        )
    }
}
export default Card;