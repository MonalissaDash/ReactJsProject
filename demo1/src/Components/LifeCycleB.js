import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
     
         console.log("LifeCycleB  constructor ")
     }
     static  getDerivedStateFromProps(props, state) {
         console.log("LifeCycleB getDerivedStateFromProps")
         return null
     }
        componentDidMount(){
        console.log("LifeCycleB  componentDidMount")
     }

     shouldComponentUpdate(nextProps,nextState){
        console.log( "LifeCycleB shouldComponentUpdate method" );
        return true;
    }
    render() {
        
            console.log("LifeCycleB render")
            return <div>{this.props.Name} </div>
            
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate ");
        return null;
    
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate ");
    }
}

export default LifeCycleB
