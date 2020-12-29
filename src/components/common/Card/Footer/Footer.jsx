import React from 'react';
import findByType from './../../../../utils/findByType';

function Footer({
    parent,
    style
}) {        
    const { children, variant } = parent.props;
    const footer = findByType(children, Footer);
    
    if(!footer) return null;

    return (
        <div className={style["footer"]} style={{ backgroundColor: variant }}>
            {footer.props.children}
        </div>
    )
}

export default Footer;