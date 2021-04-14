import React, { Component } from 'react'

class Button extends Component{
    render(){
      return(
        <div>
            <button onClick={} isSelected={this.props.style} children={this.props.children}></button>
        </div>
      )
    }
}
export default Button;