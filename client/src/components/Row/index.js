import React from 'react'

function Row() {
    return (
        <div className={"row"}>
            {props.children}
        </div>
    )
}

export default Row