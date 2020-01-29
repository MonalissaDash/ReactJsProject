import React ,{Component} from 'react'


const Hello =()=>{
    // return (
    //     <div>
    // <div className:'dummy'> 
    //     <h1>Good Evening</h1> // Using jsx
    //     </div>
    // )
   // return React.createElement('div',null, '2020') // without JSX try
   //return React.createElement('div',null, React.createElement('h1',null,"2020"))} 
   //return React.createElement('div',{id:'Hello'}, React.createElement('h1',null,"2020"))} // the second parameter is only the oject of key value pair
   // The create element can have any number of child elements inspect in the web pages
  // return React.createElement('div',{id:'Hello',class:'dummy'}, React.createElement('h1',null,"2020"))}// check console in inspect it should be className camel property
  return React.createElement('div',{id:'Hello',className:'dummy'}, React.createElement('h1',null,"2020"))}
   export default Hello