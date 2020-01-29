import React, { Component } from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'


 class ComponentA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              FirstName:'Monalissa',
              LastName:'Dash'
         }
     }
     
    render() {
        return (
            <div>
                <ComponentB FName={this.state.FirstName} LName={this.state.LastName}/>
                {/* <ComponentC FName={this.state.FirstName} LName={this.state.LastName}/> */}
                </div>
        )
    }
}

export default ComponentA
