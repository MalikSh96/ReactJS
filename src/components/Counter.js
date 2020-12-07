//Since we are learning about state in class components, this will be a class component
//with react snippets, typing 'rce' is a shortcut for creating a class component (I am using ES7 snippet)
import React, { Component } from 'react'

class Counter extends Component {
    /* 
    We need a count state, to track of the counter value 
    And we initialize 'state' in the constructor
    */
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // increment(){
    //     //To change the state of the component, we need to use setState
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {
    //         console.log('Callback value', this.state.count);
    //     });
    //     console.log(this.state.count);
    // }

    increment(){
        //To change the state of the component, we need to use setState
        //Here we are always using the previous state, and not the current state as in the code above^^^
        this.setState( (prevState) => ({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>
                    Increment
                </button>
            </div>
        )
    }
}

export default Counter;
