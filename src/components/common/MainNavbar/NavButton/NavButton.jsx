import React from 'react'
import { Link } from 'react-router-dom';
import style from './NavButton.module.css';

function Button({ children, ...props }) {
    return (
        <Link className={style["button"]} {...props}>
            {children}
        </Link>
    )
}

export default Button;