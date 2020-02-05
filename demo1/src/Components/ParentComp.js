//import React, { Component, PureComponent } from 'react'
import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {// REgular comp. will render no matter what
    //class ParentComp extends PureComponent { // pure component doent render if no diff is found with the prev comp.
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Monalissa'
         }
     }
    componentDidMount(){
        setInterval(()=>{
        this.setState({
            name:'Monalissa'

        })
    },2000)
    }
     
    render() {
        console.log("****************************Parent component render*****************************")
        return (
            <div>
                Parent Component {this.state.name}
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
                
            </div>
        )
    }
}

export default ParentComp
