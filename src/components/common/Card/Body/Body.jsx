import React from 'react';

function Body({
    parent,
    style,
    children
}) {
    return (
        <div className={style["body"]} style={{ backgroundColor: parent.props.variant }}>
            {children}
        </div>
    )
}

export default Body;
