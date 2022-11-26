import React from "react"
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__row">
                    <p className="footer__autor">&copy; 2022</p>
                    <ul className="footer__items">
                        <li className="footer__item">
                            <a className="footer__link" href="https://practicum.yandex.ru/profile/web/">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="https://github.com/ArturMaksimenko1994">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
