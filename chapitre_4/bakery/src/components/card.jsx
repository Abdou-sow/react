import React from 'react'


class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            Image: "url('../public/images/item.png')",

        }
    }
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/" + this.productName.productName+ ".png")
            .then(resultat => resultat.blob())
            .then(elem => {
                console.log('elem',elem);
                const objectURL = URL.createObjectURL(elem)
                console.log('objectURL', objectURL);
                this.setState({ Image: objectURL });
            })
            .catch(error => console.error(error));

    }
    render() {
        return (
            <div onClick={this.props.onclick}>
                {this.props.price}
                {this.props.productName}
                <button style={{ backgroundImage: this.state.Image, height: 100, width: 100 }}>
                </button>
            </div>
        )
    }
}
export default Card;