import React, { Component } from 'react'

class List extends Component {

    render(props) {
        return (
            <ul>
                {this.props.myliste.map((x) =><li>{(x.name)}</li> )}
            </ul>
        )
    }
}
export default List;