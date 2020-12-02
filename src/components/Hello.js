import React from 'react';

//This is the JSX version of the Hello component
// const Hello = () => {
//     return (
//         <div className='dummyClass'>
//             <h1>Hello Malik Sharfo!</h1>
//         </div>
//     )
// }

const Hello = () => {
    //createElement() accepts 3 parameters, at minimum
    //1st parameter, a string which specifies the html tag to be rendered
    //2nd parameter, we get to pass any optional props - Is an object of k/v pairs that will be applied to the element
    //3rd parameter, is the children for the html element (in this case children for our 'div' tag)
    //createElement() can accept any number of elements as children.
    return React.createElement(
        'div', 
        {
            id: 'hello',
            className: 'dummyClass'
        }, 
        React.createElement('h1', null, 'Hello Malik, how are you?'));
}

export default Hello;