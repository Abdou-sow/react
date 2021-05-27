import React from "react"


export default class Add extends React.Component{
    constructor() {
        super()
        this.state = {
            Name: "",
            
        }
    }
    
    updateName = (e) => {
        this.setState({ Name: e.target.value })
    }
    render(){
        console.log("name :",this.state.Name);
        return(
            <div>
                <h1>Add</h1>

                <input type="text" onChange={this.updateProductName}/>
                <button>send</button>
            </div>
        )

    }
        
    
}