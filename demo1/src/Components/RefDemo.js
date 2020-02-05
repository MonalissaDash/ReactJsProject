import React, { Component } from 'react'

 class RefDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef();
        this.cbRef=null
        this.SetcbRef=element=>{
            this.cbRef=element
        }
    }
     
    // In callBack Ref in componentDidMount () this will call back with the DOM element when component mount and call it with null when component unmounts
    componentDidMount(){
        if(this.cbRef)// checks if its null 
        {
            this.cbRef.focus() // In callback ref current is not used instead the element value is directly passed into the property
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    onClickHandler=()=>{

        alert(this.inputRef.current.value)

    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.cbRef}/>
                <button onClick={this.onClickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo
