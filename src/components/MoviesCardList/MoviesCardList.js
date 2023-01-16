import React from "react"

import MoviesCard from "./../MoviesCard/MoviesCard";

import './MoviesCardList.css';



const MoviesCardList = (props) => {
    return (
        <div className="movies-cardlist">
            <div className="movies-cardlist__row">
                {props.isMovies ? props.cards.map((item, index) => {
                   
                    return (

                        <MoviesCard
                            saveCard={props.saveCard}
                            card={item}
                            key={index}
                            trailerLink={item.trailerLink}
                            image={`https://api.nomoreparties.co${item.image.url}`}
                            nameRU={item.nameRU}
                            duration={item.duration}
                            isSaved={props.isSaved}
                            isLiked={props.isLiked(item)}
                        />
                    )
                }) : props.savedCards.map((item, index) => {
                    return (
                        <MoviesCard
                            deleteCard={props.deleteCard}
                            card={item}
                            key={index}
                            trailerLink={item.trailerLink}
                            image={item.image}
                            nameRU={item.nameRU}
                            duration={item.duration}
                            isSaved={props.isSaved}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesCardList;