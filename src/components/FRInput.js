//FRInput = forward ref input
import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

//the arrow function is passed as a param to the forwardRef method
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}) 

export default FRInput
