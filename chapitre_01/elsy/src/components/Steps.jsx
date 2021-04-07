import React from "react";

class Steps extends React.Component {

    render() {
        return (
            <div>
                <div className="box impairs col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize:100 , color:"black"}}>
                       local_drink
                    </span>
                </div>
                <div className="box pairs col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize:100 , color:"black"}}>
                        directions_walk
                    </span>
                </div>
                <div className="box impairs col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize:100 , color:"black"}}>
                        favorite
                    </span>
                </div>
                <div className="box pairs col-sm-3 col-6">
                    <span class="material-icons" style={{ fontSize:100 , color:"black"}}>
                        wb_sunny
                    </span>
                </div>
            </div>
        )
    };
}

export default Steps;