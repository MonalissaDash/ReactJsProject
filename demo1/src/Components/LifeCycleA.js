import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Monalissa'
         }
         console.log("LifeCycleA  constructor ")
     }
     static  getDerivedStateFromProps(props, state) {
         console.log("LifeCycleA getDerivedStateFromProps")
         return null
     }
     shouldComponentUpdate(nextProps,nextState){
         console.log( "LifeCycleA shouldComponentUpdate method" );
         return true;
     }


        componentDidMount(){
        console.log("LifeCycleA  componentDidMount")
     }
     change=()=>{
         this.setState({
             name:"Sweta"
         })
     }

     
    render() {
        
            console.log("LifeCycleA render")
            return (
                <div>
           
            <LifeCycleB Name={this.state.name}/>
            <button onClick={this.change}>Click</button>
            </div>
            )           
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate ");
        return null;
    
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate ");
    }

}

export default LifeCycleA
