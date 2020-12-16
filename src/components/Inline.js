import React from 'react'

/*
In React, Inline styles are not specified as a string.
Instead they are specified as an object whose key is the camelCased version
of the stylename and the value is usually a string
*/

const heading = {
    //fontSize is key and xx px is value
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
