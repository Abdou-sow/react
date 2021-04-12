import react from "react"


class Bouton extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.decrementCount} style={{ backgroundColor: "red" }} >-</button>
                <button onClick={this.incrementCount} style={{ backgroundColor: "green" }}>+</button>
            </div>
        )
    }
}

export default Bouton;