import React from 'react'
import { join } from './../../../../utils/arrayUtils';
import PropTypes from 'prop-types';

function Header({
    filling = true,
    style,
    variant,
    children
}) {

    return (
        <div className={join(
            style["header"],
            (filling ? "text-white" : `text-${variant}`),
            (filling && `bg-${variant}`),
            `border-${variant}`)}
        >
            { children }
        </div>
    );
}

Header.propTypes = {
    filling: PropTypes.bool,
    style: PropTypes.any,
    variant: PropTypes.string
}

export default Header;
