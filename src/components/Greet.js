//When creating a component, the first step is to import react
import React from 'react';
//This is a functional component
// function Greet(){
//     return <h1>Hello Malik!</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        //we can only return one html element, so we have to enclose all of our content in one div wrapper tag
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}!
                {/* <p>This is looking good</p> */}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet;