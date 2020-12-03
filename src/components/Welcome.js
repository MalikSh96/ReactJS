//When creating a class component, you need to include 2 imports
import React, { Component } from 'react';
//This is a class component
//next, define the class
//for this class to become a react component, you can use 2 steps
//1, it should extend the component class from react 
//2, the class has to implement the render method, which will return null or some html
class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}!</h1>
    }
}

export default Welcome;