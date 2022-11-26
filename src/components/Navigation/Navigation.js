import React from "react"
import { Link, NavLink } from 'react-router-dom';

import Account from '../Account/Account';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Navigation.css';

const setActive = ({ isActive }) => isActive ? 'navigation__link navigation__link_active ' : 'navigation__link';


const Navigation = () => {

    return (
        <nav className="navigation">
            
            <div className="navigation__movies">
                <NavLink to="/movies" className={setActive}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={setActive}>Сохранённые фильмы</NavLink>
            </div>

            <Link to="/profile" className="navigation__account">
                <p className="navigation__text">Аккаунт</p>
                <Account />
            </Link>
            <BurgerMenu />
        </nav>
    )
}

export default Navigation;