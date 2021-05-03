import React from 'react'


class Card extends React.Component{
    render(){
        return(
            <div onClick={this.props.onclick}>
                {this.props.pice}
                {this.props.itemName}
            </div>
        )
    }    
}
export default Card ;