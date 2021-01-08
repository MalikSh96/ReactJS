import React, { Component } from 'react'

class HoverCounter extends Component {

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
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounter
