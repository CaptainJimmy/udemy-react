import React from 'react'
import './Person.css'

const person = (props) => {
    
    return (

      
            <div className="Person">
                <p onClick={props.click}> My Name is {props.name} and I'm {props.age} years old.  I am the {props.role}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        
    )

}

export default person;