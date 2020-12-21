import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Malik'
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        //has to return the new state or null
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }

    render() {
        console.log('LifecycleB render');
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
