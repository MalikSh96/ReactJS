import React from 'react'
//rfce is snippet to create functional component scheme

//destructuring {name}
function MemoComp({name}) {
    console.log('Rendering Memo Component');
    return (
        <div>
            {name}
        </div>
    )
}

/*
What we see here is something called a higher order component.
React.memo accepts a component, adds some things to that component
and returns a new enhanced component.
In this case, a component capable of avoiding re-renders when
there is no changes in props.
*/
export default React.memo(MemoComp);
