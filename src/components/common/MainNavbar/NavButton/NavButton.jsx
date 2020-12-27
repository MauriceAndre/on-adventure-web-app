import React from 'react'
import style from './NavButton.module.css';

function Button({ children, ...props }) {
    return (
        <a href="#" className={style["button"]} {...props}>
            {children}
        </a>
    )
}

export default Button
