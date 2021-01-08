import React, { Component } from 'react'

class ClickCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () => {
        /*since we need the previous state to increment the value
          the argument to setState will NOT be a single object
          instead it will take in a function, which gets previous state
          as a parameter and returns the new state */
        this.setState( prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter
