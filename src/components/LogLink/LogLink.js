
import React from "react"
import { Link } from 'react-router-dom';

import './LogLink.css';

const LogLink = () => {

    return (
        <nav className="logLink">
            <Link to="/signup" className="logLink__link">Регистрация</Link>
            <Link to="/signin" className="logLink__link logLink__link_btn_blue">Войти</Link>
        </nav>
    )
}

export default LogLink;