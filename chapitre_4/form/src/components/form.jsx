import React, { Component } from "react"



class Form extends Component {
    state = {
        email: null,
        pasword: null
    }




    render() {
        return (
            <div>
                <div className="container" >
                    <div className="row">
                        <label>email</label>
                    </div>
                    <div className="row">
                    <input type="text" id="email" />
                    </div>
                    <div className="row">
                    <label>pasword</label>
                    </div>
                    <div className="row">
                    <input type="text" id="pasword" />
                    </div>
                    <button>sumbit</button>
                </div>
            </div>
        )
    }
}

export default Form;