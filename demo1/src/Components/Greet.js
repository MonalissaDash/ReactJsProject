import React from 'react'
 // functional component example

// function Greet(){
//      return <h1>Hello Everyone</h1>;
//  }
//const Greet =props=>{ 1
    const Greet =({name,heroname})=>{ //2 Destructuring
    //console.log(props);
   // return<h1>Hello Everyone </h1>
   // for multiple line use paranthesis
   //we can pass only one html tag in return () but if we <div> we can use multiple html element
  // return <h1>Hello {props.name} </h1>
   return( 
   <div>
    {/*<h1>Hello {props.name} a.k.a {props.heroname}</h1>   1*/ } 
    <h1>Hello {name} a.k.a {heroname}</h1> {/* 2*/}
        <h1>Bye</h1>
        </div>
                )
}
// const Greet =()=> <h1>Good Morning</h1> // component may or maynot be same 
//export const Greet =()=> <h1>Good Morning</h1> // name export: Component Name have to be same everywhere
// Here we import react but doesn't use React.createElement because JSX translate it in to createElement
export default Greet