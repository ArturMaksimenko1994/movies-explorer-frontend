import React from 'react';
import './Profile.css';

const Profile = (props) => {
    return (
        <div className="profile">
            {/* <div className="profile__success">
          <p className="profile__text">Данные успешно изменены.</p>
        </div> */}
            <h3 className="profile__title">Привет!</h3>
            <form className="profile__form">
                
                <label className="profile__input-label" htmlFor="name">Имя
                    <input
                        className="profile__input"
                        type="text"
                        name="name"
                    />
                </label>
                <label className="profile__input-label" htmlFor="email">Почта
                    <input
                        className="profile__input"
                        type="email"
                        name="email"
                    />
                </label>
                <span className="profile__error-message"></span>
                <button type="submit" className="profile__submit-btn"> Сохранить</button>
                <button type="button" className="profile__edit-btn">Редактировать</button>
                <button type="button" className="profile__sign-out-btn">Выйти из аккаунта</button>

            </form>
        </div>
    );
}


export default Profile;