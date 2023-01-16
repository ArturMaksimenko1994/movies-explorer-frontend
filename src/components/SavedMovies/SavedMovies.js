import React, { useEffect } from "react";
import mainApi from "../../utils/MainApi";

import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import SearchForm from "./../SearchForm/SearchForm";

import "./SavedMovies.css"

const SavedMovies = (props) => {

    useEffect(() => {
        const checkboxStatus = JSON.parse(localStorage.getItem('isCheckboxSelected'));
        if (checkboxStatus) {
            props.setIsCheckboxSelected(checkboxStatus)
        }
        else {
            props.setIsCheckboxSelected(false)
        }
    },
        []);

    useEffect(() => {
        mainApi.getSavedMovies()
            .then((res) => props.handleSetSavedCards(res))
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <section className="saved-movies">
            <SearchForm
                isSelected={props.isSelected}
                searchShortFilms={props.searchShortFilms}
                searchAllFilms={props.searchAllFilms}
                isSaved={true}
                onSearchMovies={props.onSearchMovies}
            />
            <MoviesCardList savedCards={props.savedCards} isSaved={true} deleteCard={props.deleteCard} />
        </section>
    )
}

export default SavedMovies;