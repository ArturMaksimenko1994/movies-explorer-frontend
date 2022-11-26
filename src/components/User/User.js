import React from "react";
import { useLocation } from 'react-router-dom';

import Logo from "./../Logo/Logo";
import UserLinkAccount from "./../UserLinkAccount/UserLinkAccount";

import "./User.css"

const User = ({ title, children }) => {
    const location = useLocation();
    return (
        <div className="user">
            <div className="user__container">
                <div className="user__row">
                    <div className="user__logo">
                        <Logo />
                    </div>
                    <h2 className="user__title">{title}</h2>
                    {children}
                    {location.pathname === '/signup' && (
                        <UserLinkAccount
                            text={'Уже зарегистрированы?'}
                            to={'/signin'}
                            linkText={'Войти'}
                        />
                    )}
                    {location.pathname === '/signin' && (
                        <UserLinkAccount
                            text={'Ещё не зарегистрированы?'}
                            to={'/signup'}
                            linkText={'Регистрация'}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default User;