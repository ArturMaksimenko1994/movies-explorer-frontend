import React from "react";
import "./MoviesCard.css";

const MoviesCard = (props) => {

    //длительность фильма 
    function setDuration() {
        let hours = Math.floor(props.duration / 60);
        let minutes = Math.floor(props.duration - hours * 60);
        if (minutes > 0 && hours > 0) {
            return `${hours} ч ${minutes}м`
        }
        if (hours > 0 && minutes === 0) {
            return `${hours} ч`
        }
        if (hours === 0 && minutes) {
            return `${minutes}м`
        }
    }


    function handleCardLike(e) {
        props.saveCard(props.card);
    }

    function handleDelete(e) {
        props.deleteCard(props.card);
    }

    const cardLikeButtonClassName = `movies-card__like ${props.isLiked ? "movies-card__like_active" : " "
        }`;

    const cardButtonClassName = `movies-card__delete`

    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <a href={props.trailerLink} target='_blank' rel="noreferrer">
                    <img className="movies-card__link" src={props.image} alt={props.nameRU} />
                </a>
                <div className="movies-card__row">
                    <h2 className="movies-card__title">{props.nameRU}</h2>
                    <div className="movies-card__elements-like">
                        <button
                            onClick={props.isSaved ? handleDelete : handleCardLike}
                            className={props.isSaved ? cardButtonClassName : cardLikeButtonClassName}
                            type="button"
                        ></button>
                    </div>
                </div>
                <p className="movies-card__duration">{setDuration()}</p>
            </div>
        </div>
    );
}
export default MoviesCard;