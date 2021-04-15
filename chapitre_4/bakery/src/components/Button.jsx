import React, { Component } from 'react'

class Button extends Component {
    render(props) {
        return (
            <div>
                <button onClick={this.props.onClickFuction} className={this.props.isSelected} >
                    {this.props.children}
                </button>
            </div>
        )
    }
}
export default Button;