import { faAngleDoubleRight, faCar, faCat, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './Sidebar.module.css';
import './Sidebar.css';
import { join } from './../../../utils/arrayUtils';


function Sidebar() {
    return (
        <nav className={style["sidebar"]}>
            <ul className={style["sidebar-nav"]}>
                <li className={style["logo"]}>
                    <span className={join(style["link-text"], style["logo-text"])}>Test</span>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="3x"/>
                </li>
                <li className={style["nav-item"]}>
                    <a type="button" className={style["nav-link"]}>
                        <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
                        <span className={style["link-text"]}>Dashboard</span>
                    </a>
                </li>
                <li className={style["nav-item"]}>
                    <a type="button" className={style["nav-link"]}>
                        <FontAwesomeIcon icon={faCat} size="3x" />
                        <span className={style["link-text"]}>Cats</span>
                    </a>
                </li>
                <li className={style["nav-item"]}>
                    <a type="button" className={style["nav-link"]}>
                        <FontAwesomeIcon icon={faCar} size="3x" />
                        <span className={style["link-text"]}>Car</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
