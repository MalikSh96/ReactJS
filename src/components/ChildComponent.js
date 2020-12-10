import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* 
            We are grabbing reference of greetHandler from ParentComponent.js with 
            the onClick={props.greetHandler}

            -Passing a parameter when calling the parent method from the child component:
            Arrow function in the return statement is really useful for this, as 
            arrouw function syntax is the simplest way to pass parameter from the child component 
            to the parent component
            */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
