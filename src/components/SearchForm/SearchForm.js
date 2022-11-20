import React from "react";

import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import "./SearchForm.css"

const SearchForm = () => {
    return (
        <section className="search-row">
            <div className="search-row__container">
                <div className="search-row__hardly">
                    <form className="search-form">
                        <input
                            className="search-form__input"
                            type="text"
                            placeholder="Фильм"
                            required
                        />
                        <div className="search-form__bottom" >
                            <button className="search-form__btn" type="submit"></button>
                        </div>

                    </form>
                    <div className="search__checkbox">
                        <FilterCheckBox />
                        <p className="search__text">Короткометражки</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchForm;
