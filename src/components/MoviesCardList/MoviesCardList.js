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
            <button className="movies-cardlist__show">Ещё</button>
        </section>
    )
}

export default MoviesCardList;