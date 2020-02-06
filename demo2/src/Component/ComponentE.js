import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

 class ComponentE extends Component {
    //  static contextType=UserContext // his work fine but it caan only be used in class component and it can access only one context type.
    render() {
        return(
            <div>
                ComponentE context type {this.context}
            <ComponentF/>
            </div>
        ) 
    }
}
ComponentE.contextType=UserContext

export default ComponentE
