import React from 'react'

// function FRInput() {
//     return (
//         <div>
            
//         </div>
//     )
// }
// Here the component is passed in the method 
const FRInput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput
