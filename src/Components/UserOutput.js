import React from 'react'
import './Person.css'

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p> Hi! My name is {props.name} </p>
            <p> Other Things Go In Here</p>
        </div>

    )

}

export default userOutput;