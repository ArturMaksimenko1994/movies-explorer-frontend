import React from "react"
import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Navigation from './../Navigation/Navigation';
import LogLink from './../LogLink/LogLink';

import './Header.css';

const Header = (props) => {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/" >
                        <Logo />
                    </Link>
                </div>
                <div className="header__row">
                {!props.loggedIn ? <LogLink/> : <Navigation onClick={props.onClick}/>}
                </div>
            </div>
        </header>
    )
}

export default Header;
