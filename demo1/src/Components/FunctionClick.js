import React from 'react'

function FunctionClick() {
 function clickHandler(){
    console.log('Button clicked!'); // A function can be called inside a function
}
    return (
        <div>
            <button onClick={clickHandler}>Click</button> {/*calling the function i.e clickHandler() is not done here...declaring is done*/}
        </div>
    )
}

export default FunctionClick
