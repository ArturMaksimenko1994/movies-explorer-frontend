import React from "react";

import NavTab from './../NavTab/NavTab';
import "./Promo.css"

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__row">
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    < NavTab />
                </div>
            </div>
        </section>
    )
}

export default Promo;
