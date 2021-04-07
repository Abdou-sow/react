import React from "react";

class Box extends React.Component {

    render() {
        return (
            <div>
                <div className="box pairs col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize:100 , color:"this.props.color"}}>
                    this.props.icon 
                    </span>
                    <p>this.props.unit</p>
                </div>
            </div>
        )
    };
}

export default Box;