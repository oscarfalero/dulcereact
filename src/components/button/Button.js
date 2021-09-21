import React from 'react'
import './Button.module.css'

const Button = ({handleClick, btnName}) => {

    return (
        <>
           <button onClick={handleClick}>{btnName}</button> 
        </>
    )
}

export default Button
