import React, { Component } from 'react'
import Input from './Input'
 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
         this.componetRef=React.createRef()
     }
     clickHandle(){
         this.componetRef.current.focusInput()
     }


     
    render() {
        return (
            <div>
                <Input ref={this.componetRef}/>
                <button onClick={this.clickHandle}  >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
