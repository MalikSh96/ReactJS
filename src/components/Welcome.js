//When creating a class component, you need to include 2 imports
import React, { Component } from 'react';
//This is a class component
//next, define the class
//for this class to become a react component, you can use 2 steps
//1, it should extend the component class from react 
//2, the class has to implement the render method, which will return null or some html
class Welcome extends Component {
    render(){
        const {name, heroName} = this.props; ////we extract name and heroName property from the props object
        /*^We are simply extracting the necessary props
        Our props object could contain some more props, but we can destructure only the ones we wish to use
        in our component
        */
        return <h1>Welcome {name} a.k.a {heroName}!</h1>
    }
}

export default Welcome;