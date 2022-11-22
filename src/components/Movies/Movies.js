import React from 'react';

import SearchForm from './../SearchForm/SearchForm';
import MoviesCardList from './../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies() {
  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>
  );
}

export default Movies;
