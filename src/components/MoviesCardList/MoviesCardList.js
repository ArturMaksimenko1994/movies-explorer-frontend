import React from "react"

import MoviesCard from "./../MoviesCard/MoviesCard";

import './MoviesCardList.css';

const MoviesCardList = () => {
    return (
        <section className="movies-cardlist">
            <div className="movies-cardlist__row">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className="movies-cardlist__bottom">
                <button className="movies-cardlist__show" type="button">Ещё</button>
            </div>
        </section>
    )
}

export default MoviesCardList;