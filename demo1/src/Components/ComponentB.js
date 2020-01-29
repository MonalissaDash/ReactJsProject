import React, { Component } from 'react'
import ComponentC from './ComponentC'

 class ComponentB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Skill:'React',
              Loctaion:'Bangalore',
              fname:this.props.FName,
              lname:this.props.LName
         }
     }
     
    render() {
        return (
            <div>
           <h1> My Name is {this.props.FName} {this.props.LName}.</h1>
           <ComponentC  FirstN={this.state.fname} LastN={this.state.lname} S={this.state.Skill} Loc={this.state.Loctaion}/>

            </div>
        )
    }
}

export default ComponentB
