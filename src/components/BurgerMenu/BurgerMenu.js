import './BurgerMenu.css';
import React, { useState, useRef } from "react"
import { Link, NavLink } from 'react-router-dom';

import Account from '../Account/Account';

function BurgerMenu() {

    const safeDocument = typeof document !== 'undefined' ? document : {};
    const scrollBlocked = useRef();
    const html = safeDocument.documentElement;
    const { body } = safeDocument;

    // функция удаляет прокрутку body
    const blockScroll = () => {
        if (!body || !body.style || scrollBlocked.current) return;

        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight =
            parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

        html.style.position = 'relative';
        html.style.overflow = 'hidden';
        body.style.position = 'relative';
        body.style.overflow = 'hidden';
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

        scrollBlocked.current = true;
    };

    // функция добавляем прокрутку body
    const allowScroll = () => {
        if (!body || !body.style || !scrollBlocked.current) return;

        html.style.position = '';
        html.style.overflow = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';

        scrollBlocked.current = false;
    };

    //классы обычной и активной ссылки
    const setActive = ({ isActive }) => isActive ? 'burger-menu__link burger-menu__link_active ' : 'burger-menu__link';

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

    //открываем burger menu
    const handleToggleBurgerMenu = () => {
        setOpenBurgerMenu(prev => !prev)
        blockScroll();
    }

    //закрываем burger menu
    const closeBurgerMenu = () => {
        setOpenBurgerMenu(false)
        allowScroll();
    }


    return (
        <div className="burger-menu">

            <div className={`burger-menu__icons ${openBurgerMenu ? "burger-menu__icons_active" : ""} `} onClick={handleToggleBurgerMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`burger-menu__schow ${openBurgerMenu ? "burger-menu__schow_active" : ""}`} onClick={closeBurgerMenu}></div>

            <ul className={`burger-menu__items ${openBurgerMenu ? "burger-menu__items_active" : ""}`}>
                <li className="burger-menu__item">
                    <NavLink to="/" className={setActive} onClick={closeBurgerMenu}>Главная</NavLink>

                </li>
                <li className="burger-menu__item">
                    <NavLink to="/movies" className={setActive} onClick={closeBurgerMenu}>Фильмы</NavLink>

                </li>
                <li className="burger-menu__item">
                    <NavLink to="/saved-movies" className={setActive} onClick={closeBurgerMenu}>Сохранённые фильмы</NavLink>
                </li>
                <li className="burger-menu__item">
                    <Link to="/profile" className="burger-menu__account" onClick={closeBurgerMenu}>
                        <p className="header__text">Аккаунт</p>
                        <Account />
                    </Link>
                </li>
            </ul>
        </div>

    );
}

export default BurgerMenu;
