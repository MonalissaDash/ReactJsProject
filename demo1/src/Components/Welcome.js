import React ,{ component } from 'react'
// class component example
class Welcome extends React.Component {
    render(){
        const {name,heroname} = this.props; {/*  2 DEstructuring in Class component */}
   
    //  return <h1>Hello Buddy! {this.props.name}</h1> // props can be accessed in class component by using this.props.name
    return <h1>Hello Buddy! {name}{heroname}</h1> // 2
    }
}
 export default Welcome