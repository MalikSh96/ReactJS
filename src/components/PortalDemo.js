import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    /*
    ReactDOM.createPortal takes 2 params
    1*. the jsx you want to render
    2. the DOM node to mount the element unto

    *The first parameter to createPortal() can be any element
    that react can render, it can be numbers, strings, jsx or even
    components*

    */
    return ReactDOM.createPortal(
        <div>
            <h1>Portals demo</h1>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
