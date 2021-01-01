//FR = forward ref
import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    
    clickHandler = () => {
        /*
        since we are using forward ref technique 
        ref.current points to the native input element and NOT the
        FRInput instance
        */
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
