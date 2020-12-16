import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    //reading the value of the primary prop
    //if true the word 'Stylesheets' is colored orange (value of primary), if false it is colored black (value of empty string)
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
