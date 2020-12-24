import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //approach 1
        //it is common to create Refs in constructor so that they can be referenced throughout the component
        this.inputRef = React.createRef();
        
        //apporach 2
        //cb = callback (step 1)
        this.cbRef = null;
        //(step 2) - creating a method that will assign a DOM element to the ref created in step 1
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        //approach 1
        // this.inputRef.current.focus();
        // console.log(this.inputRef);

        //approach 2
        //step 4
        /*
        What you have to know about callback refs is that
        React will call the ref callback with the DOM element when the component
        mounts and call it with "null" when it unmounts.
        That is why it is important to check if a value exists on the reference property 
        and that it is NOT null 
        */
       if(this.cbRef){
           /*
           unlike the previous approach the DOM node 
           is directly accessed using the ref property, that why we don't need
           .current as in the "access refs" way
           */
           this.cbRef.focus();
       }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                {/* approach 1 */}
                <input type="text" ref={this.inputRef} />
                {/* step 3 for callback refs below (approach 2)*/}
                <input type="text" ref={this.setCbRef} />


                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
