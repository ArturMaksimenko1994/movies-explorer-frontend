import React from "react";

import './ShowMoviesButton.css';



const ShowMoviesButton = (props) => {

    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
    
    return (
        <button onClick={props.handleLoadMore}
            className={`movies-cardlist__show ${foundMovies && props.cards?.length < foundMovies.length ? 'movies-cardlist__show_active' : ''}`}>
            Ещё
        </button>
    )
}

export default ShowMoviesButton;