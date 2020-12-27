import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from './NavButton';
import { join } from './../../../utils/arrayUtils';
import './MainNavbar.css';
import style from './MainNavbar.module.css';

function MainNavbar() {
    return (
        <Navbar bg="dark" variant="dark" className={join([style.navbar, "px-4"])}>
            <Nav className="mr-auto">
                <Nav.Item>
                    <Button>
                        <FontAwesomeIcon size="lg" icon={faBars} color="white"/>
                    </Button>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Button>
                        <FontAwesomeIcon size="lg" icon={faBell} color="white"/>
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button>
                        <FontAwesomeIcon size="lg" icon={faPlus} color="white"/>
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button>
                        <FontAwesomeIcon size="lg" icon={faCaretDown} color="white"/>
                    </Button>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default MainNavbar;
