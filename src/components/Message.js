//Will use state in here
//class component
//When creating a class component, you need to include 2 imports
import React, { Component } from 'react';
//This is a class component
//next, define the class
//for this class to become a react component, you can use 2 steps
//1, it should extend the component class from react 
//2, the class has to implement the render method, which will return null or some html
class Message extends Component {
    //The first step is to create a state object and initialize it, and that is usually done inside the class constructor
    constructor() {
        //The super() is required because we extend react's component class, and a call has to be made to the base class constructor
        super();
        //state is a reserved keyword in react
        this.state = {
            message: 'Welcome visitor'
        };
    }

    changeMessage(){
        //to change the state of the component we need to call setState method
        //setState method accepts an object which is nothing but the new state of the component
        this.setState({
            message: 'Thank you for subscribing'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}!</h1>
                <button onClick={
                    () => this.changeMessage()}
                >
                    Subscribe
                </button>
            </div>
        )
    }
}

export default Message;