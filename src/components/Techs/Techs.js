import React from "react";

import Title from "./../Title/Title";
import "./Techs.css"

const Techs = () => {
    return (
        <section className="techs" id="techs">
            <div className="techs__container">
                <Title title='Технологии'></Title>
                <h3 className="techs__number">7 технологий</h3>
                <p className="techs__description">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className="techs__items">
                    <li className="techs__item">HTML</li>
                    <li className="techs__item">CSS</li>
                    <li className="techs__item">JS</li>
                    <li className="techs__item">React</li>
                    <li className="techs__item">Git</li>
                    <li className="techs__item">Express.js</li>
                    <li className="techs__item">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;