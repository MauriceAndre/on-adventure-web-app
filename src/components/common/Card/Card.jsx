import React, { Component } from 'react'
import PropTypes from 'prop-types';
import style from './Card.module.css';
import { join } from '../../../utils/arrayUtils';
import findByType from './../../../utils/findByType';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class Card extends Component {

    renderSubComponent(SubComponent) {
        const { children } = this.props;
        const component = findByType(children, SubComponent);
    
        if(!component) return null;

        return <SubComponent parent={this} style={style} {...component.props} />
    }

    render() {
        return (
            <div className={join(style["card"], "selectable")}>
                {this.renderSubComponent(Header)}
                {this.renderSubComponent(Body)}
                {this.renderSubComponent(Footer)}
            </div>
        )
    }
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

Card.propTypes = {
    variant: PropTypes.string
}

export default Card;