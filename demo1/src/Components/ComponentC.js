import React, { Component } from 'react'

 class ComponentC extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             Date:'18-01-2020'
              
         }
     }
     
    render() {
        return (
            <div>
                <h1>Ms. {this.props.FirstN} {this.props.LastN} from {this.props.Loc} have completed the {this.props.S} on {this.state.Date} </h1>
            </div>
        )
    }
}

export default ComponentC
