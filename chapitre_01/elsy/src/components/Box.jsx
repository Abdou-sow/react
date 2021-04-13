import React from "react";
import '../styles/global.css'

class Box extends React.Component {
    constructor() {
        super();
        this.state={min:0 ,max:100,onHeartChange:2} 
    }

    render() {
        if (this.props.icon !== "local_drink") {
            return (
                <div className="box col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                        {this.props.icon}
                    </span>
                    <p>{this.props.value} ,{this.props.unit}</p>
                    <input type="range" min={this.state.min} max={this.state.max} value="" onInput={this.state.onHeartChange} />
                </div>
            )
        } else {
            return (
                <div className="box col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                        {this.props.icon}
                    </span>
                    <p>{this.props.value} ,{this.props.unit}</p>
                </div>
            )
        }
    };
}

export default Box;