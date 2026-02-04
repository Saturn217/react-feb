import React from 'react'

const Button = (props) => {
    console.log(props);

    let name = 'pampam'
    
    return (
        <button className= {`btn ${props.color}`} onClick={()=>props.func(name)}>
            {props.title}
        </button>
    )
}

export default Button