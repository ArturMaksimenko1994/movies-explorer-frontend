import React from "react";
import avatar from "../../images/AboutMe/avatar.jpg";
import Title from "./../Title/Title";

import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me" id="me">
            <div className="about-me__container">
                <Title title='Студент'></Title>
                <div className="about-me__row" >
                    <div className="about-me__description">
                        <h3 className="about-me__name">Виталий</h3>
                        <p className="about-me__post">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__info">
                            Я родился и живу в Саратове, закончил факультет
                            экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
                            начал кодить. С 2015 года работал в компании «СКБ Контур».
                            После того, как прошёл курс по веб-разработке, начал заниматься
                            фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <a className="about-me__link" href="https://github.com/ArturMaksimenko1994">Github</a>
                    </div>
                    <div className="about-me__foto">
                        <img className="about-me__avatar" src={avatar} alt="аватарка" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;