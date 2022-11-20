import React from "react";

import Title from "./../Title/Title";
import "./AboutProject.css"

const AboutProject = () => {
    return (
        <section  className="about-project" id="about">
            <div className="about-project__container" >
                <Title title='О проекте' />
                <div className="about-project__row" >
                    <div className="about-project__project">
                        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__text">
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about-project__weeks" >
                        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__text">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about-project__stages">
                    <div className="about-project__beginning">
                        <p className="about-project__progress about-project__progress_blue">1 неделя</p>
                        <p className="about-project__part">Back-end</p> 
                    </div>
                    <div className="about-project__end">
                        <p className="about-project__progress about-project__progress_gray">4 недели</p>
                        <p className="about-project__part">Front-end</p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject
