import React from 'react'
import { join } from './../../../../utils/arrayUtils';
import PropTypes from 'prop-types';

function Header({
    style,
    variant,
    children
}) {

    return (
        <div className={join(style["header"], "text-white", `bg-${variant}`)}>
            { children }
        </div>
    );
}

Header.propTypes = {
    variant: PropTypes.string
}

export default Header;
