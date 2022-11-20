import React from "react"
import { Link, NavLink } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Account from '../Account/Account';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.css';

const setActive = ({ isActive }) => isActive ? 'header__link header__link_active ' : 'header__link';


const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/" >
                        <Logo />
                    </Link>
                </div>
                <div className="header__row">
                    <nav className="header__nav-movies">
                        <NavLink to="/movies" className={setActive}>Фильмы</NavLink>
                        <NavLink to="/saved-movies" className={setActive}>Сохранённые фильмы</NavLink>
                    </nav>
                    <nav className="header__nav">
                        <NavLink to="/signup" className="header__link">Регистрация</NavLink>
                        <NavLink to="/signin" className="header__link header__link_btn_blue">Войти</NavLink>
                        <Link to="/profile" className="header__account">
                            <p className="header__text">Аккаунт</p>
                            <Account />
                        </Link>
                        <BurgerMenu />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
