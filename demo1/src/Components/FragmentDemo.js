import React from 'react'

function FragmentDemo() {
    return (
        
        // <h1>Fragment Demo </h1>
        // <p> This component name is Fragment Demo</p> //only this i.e with out div tag with multiple html tag gives error 
        
        //React.Fragment will prevent a extra node of <div> tag in the render 
        <React.Fragment> 
        <h1>Fragment Demo </h1>
        <p> This component name is Fragment Demo</p>
        </React.Fragment>
    )
}

export default FragmentDemo
