import React from "react"
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__list-item">
                        <a className="portfolio__link" target="_blanc" href="https://github.com/ArturMaksimenko1994">
                            Статичный сайт
                        </a>
                    </li>
                    <li className="portfolio__list-item">
                        <a className="portfolio__link" target="_blanc" href="https://github.com/ArturMaksimenko1994">
                            Адаптивный сайт
                        </a>
                    </li>
                    <li className="portfolio__list-item">
                        <a className="portfolio__link" target="_blanc" href="https://github.com/ArturMaksimenko1994">
                            Одностраничное приложение
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
