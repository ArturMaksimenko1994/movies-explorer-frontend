import React from "react";

import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import MoviesCard from "./../MoviesCard/MoviesCard";

import "./SavedMovies.css"

const SavedMovies = () => {
    return (
        <section className="saved-movies">
            <MoviesCardList>
                <MoviesCard />
            </MoviesCardList>
        </section>
    )
}

export default SavedMovies;