import React, { useEffect, useState } from "react";

import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"

const SearchForm = (props) => {

    const [value, setValue] = useState('');

    useEffect(() => {
        const keyWord = localStorage.getItem('keyWord');
        if (!props.isSaved && keyWord) {
            setValue(keyWord)
        }
    }
        , [])

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearchMovies(value);
    }

    return (
        <div className="search-row">
            <div className="search-row__container">
                <div className="search-row__hardly">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input
                            className="search-form__input"
                            type="text"
                            placeholder="Фильм"
                            value={value}
                            onChange={handleChange}
                        />
                        <div className="search-form__bottom" >
                            <button className="search-form__btn" type="submit"></button>
                        </div>
                    </form>
                    <div className="search__checkbox">
                        <FilterCheckbox
                            isSelected={props.isSelected}
                            searchShortFilms={props.searchShortFilms}
                            searchAllFilms={props.searchAllFilms}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;
