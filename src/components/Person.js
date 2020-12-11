import React from 'react'

//Destructuring the props right in the parameter
function Person({person}) {
    return (
        <div>
            <h3>I am {person.name}.
                I am {person.age} years old.
                I know {person.skill}.
            </h3>
        </div>
    )
}

export default Person
