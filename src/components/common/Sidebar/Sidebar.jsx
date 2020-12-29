import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleRight, faArchive, faCar, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Sidebar.module.css';
import './Sidebar.css';
import { join } from './../../../utils/arrayUtils';


function Sidebar() {
    return (
        <nav className={style["sidebar"]}>
            <ul className={style["sidebar-nav"]}>
                <li key="logo" className={style["logo"]}>
                    <span className={join(style["link-text"], style["logo-text"])}>On Aventure</span>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="3x"/>
                </li>
                <li key="dashbaord" className={style["nav-item"]}>
                    <Link to="/" className={style["nav-link"]}>
                        <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
                        <span className={style["link-text"]}>Dashboard</span>                    
                    </Link>
                </li>
                <li key="trips" className={style["nav-item"]}>
                    <Link to="/" className={style["nav-link"]}>
                        <FontAwesomeIcon icon={faCar} size="3x" />
                        <span className={style["link-text"]}>Trips</span>
                    </Link>
                </li>
                <li key="archive" className={style["nav-item"]}>
                    <Link to="/" className={style["nav-link"]}>
                        <FontAwesomeIcon icon={faArchive} size="3x" />
                        <span className={style["link-text"]}>Archive</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
