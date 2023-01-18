import React, { useEffect } from 'react';

import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';
import ShowMoviesButton from './../ShowMoviesButton/ShowMoviesButton';
import mainApi from '../../utils/MainApi';
import './Movies.css';


function Movies(props) {
  
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
  },
    []);

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm
          onSearchMovies={props.onSearchMovies}
          isSelected={props.isSelected}
          searchShortFilms={props.searchShortFilms}
          searchAllFilms={props.searchAllFilms}
        />
        <MoviesCardList
          cards={props.cards}
          isSaved={false}
          saveCard={props.saveCard}
          isLiked={props.isLiked}
          isMovies={true}
        />
        <ShowMoviesButton handleLoadMore={props.handleLoadMore} cards={props.cards} />
      </div>
    </section>
  );
}

export default Movies;
