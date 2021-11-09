import React from 'react';
import './Button.css'

const Button = (props) => {
    const {value, handleClick} =  props
    return ( 
        <button className="btn-one" onClick={() => handleClick()} >
            {value}
        </button>
     );
}
 
export default Button;