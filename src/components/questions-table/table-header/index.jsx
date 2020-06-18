import React from 'react'

function header(props) {
    return (
        <div className="table-header" {...props}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default header
