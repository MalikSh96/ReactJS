import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        //1.
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Malik!</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             Welcome Guest!
        //         </div>
        //     )
        // }

        //2.
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Malik!!</div>
        // }
        // else {
        //     message = <div>Welcome Guest!!</div>
        // }
        // return <div>{message}</div>

        //3.
        return (
            /*
            How this works is that the first operator (this.state.isLoggedIn) is 
            evaluated to either true or false. If it is true the 2nd operator (Welcome Malik!!!)
            is returned.
            If the first operator turns out to be false, then the 3rd operator is returned 
            (Welcome Guest!!!)
            */
            this.state.isLoggedIn ?
                <div>Welcome Malik!!!</div> :
                <div>Welcome Guest!!!</div>
        )

        //4. 
        // return(
        //     /*
        //     The expression first evaluates the left hand side of the operator (this.state.isLoggedIn)
        //     and if it is true it ALSO evaluates the right hand side (Welome Malik!!!!)
        //     However if it evaluates to false, then the right hand side will never be evaluated as
        //     it doesn't affect the final value of the whole expression
        //     */
        //     this.state.isLoggedIn && <div>Welome Malik!!!!</div>
        // )

        // return (
        //     <div>
        //         <div>
        //             Welcome Malik
        //         </div>
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting
