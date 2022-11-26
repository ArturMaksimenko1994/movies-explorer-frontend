import React from "react";
import "./MoviesCard.css";

import СardFoto from "./../../images/MoviesCard/MoviesCard.jpg"

const MoviesCard = () => (
    <div className="movies-card">
        <div className="movies-card__container">
            <img className="movies-card__link" src={ СardFoto } alt="превью" />
            <div className="movies-card__row">
                <h2 className="movies-card__title">33 слова о дизайне</h2>
                <div className="movies-card__elements-like">
                    <button className="movies-card__like movies-card__like_active" type="button"></button>
                </div>
            </div>
            <p className="movies-card__duration">1ч 42м</p>
        </div>
    </div>
);

export default MoviesCard;