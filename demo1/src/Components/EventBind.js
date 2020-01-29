import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props){
         super(props);
         this.state={
             message:"Hello!"
         }
         this.clickHandler=this.clickHandler.bind(this); // Approach3 Binding with constructor
     }
     clickHandler(){
         this.setState({
                message :"Bye Bye"
         })
         console.log(this);
     }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/* <button onClick={this.clickHandler.bind(this)}>Click</button> // Approach1 */}
               {/* <button onClick={()=>this.clickHandler()}>Click</button> // Approach2 */}
               <button onClick={this.clickHandler}>Click</button> {/*Approach3*/}

            </div>
        )
    }
}

export default EventBind
