import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             parentName: 'Parent'
        }

        //binding the method, since we are using the 'this' keyword in the (greetParent) method
        this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(childName){
        //`` <-- template literals. `` and ${} is a feature in ES6 and not a feature specific to React
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                {/* 
                We are passing a reference to the greetParent method as a prop called greetHandler
                Therefore we omit () after greetParent
                */}
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
