import React from 'react'
import './Person.css'

const userInput = (props) => {
    const inputStyle={
        fontSize: '24px'
    }
    return (


        <div className="UserInput">
            <input style={inputStyle} type="text" onChange={props.changed} value={props.name} />
        </div>

    )

}

export default userInput;