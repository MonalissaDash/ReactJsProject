import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ifLoggedIn:true
        }
    }
    // Conditional Rendering
    render() {
        // if(this.state.ifLoggedIn){                                               // 1st Approach
        // return (
        //     <div> Hello Mona</div>
        // )
        // }else{
        //     return(
        //         <div>Hello Guest</div>
        //     )
        // }
        // let message                                                                  // 2nd Approach
        // if(this.state.ifLoggedIn){   
        // message=<div> Hello Mona</div>
        //  }else{
        // message=<div>Hello Guest</div>
        //     }
        //     return(<div>{message}</div>)
      //  return this.state.ifLoggedIn?(<div> Hello Mona</div>):(<div>Hello Guest</div>) // 3rd Approach 
        return this.state.ifLoggedIn && <div> Hello Mona</div> // 4rth Approach 

    }
}

export default UserGreeting
