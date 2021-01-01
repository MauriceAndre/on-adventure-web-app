import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleRight, faArchive, faCar, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Sidebar.module.css';
import './Sidebar.css';
import { join } from './../../../utils/arrayUtils';

const navItems = [
    {
        key: "dashboard",
        text: "Dashboard",
        icon: faTachometerAlt,
        navigateTo: "/"
    },
    {
        key: "trips",
        text: "Trips",
        icon: faCar,
        navigateTo: "/"
    },
    {
        key: "archive",
        text: "Archive",
        icon: faArchive,
        navigateTo: "/"
    },
    {
        key: "friends",
        text: "Friends",
        icon: faUsers,
        navigateTo: "/"
    },
]

function Sidebar() {
    return (
        <nav className={style["sidebar"]}>
            <ul className={style["sidebar-nav"]}>
                <li key="logo" className={style["logo"]}>
                    <span className={join(style["link-text"], style["logo-text"])}>On Aventure</span>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="3x"/>
                </li>
                {navItems.map(({key, text, icon, navigateTo}) => {
                    return (
                        <li key={key} className={style["nav-item"]}>
                            <Link to={navigateTo} className={style["nav-link"]}>
                                <FontAwesomeIcon icon={icon} size="3x" />
                                <span className={style["link-text"]}>{text}</span>                    
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Sidebar;
