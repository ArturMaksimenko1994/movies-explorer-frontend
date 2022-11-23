import React from "react";

import "./NavTab.css"

const NavTab = () => {
    return (
        <ul className="nav-tab-items">
            <li className="nav-tab__item">
                <a className="nav-tab__link" href="#about">О проекте</a>
            </li>
            <li className="nav-tab__item">
                <a className="nav-tab__link" href="#techs">Технологии</a>
            </li>
            <li className="nav-tab__item">
                <a className="nav-tab__link" href="#me">Студент</a>
            </li>
        </ul>
    )
}

export default NavTab;