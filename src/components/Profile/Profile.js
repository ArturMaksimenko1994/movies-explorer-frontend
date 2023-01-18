import React, { useContext, useEffect } from 'react';
import './Profile.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { CurrentUserContext } from '../../contexts/currentUserContext';

import { useFormWithValidation } from '../../utils/validation';

const Profile = (props) => {

    const validation = useFormWithValidation();

    const currentUser = useContext(CurrentUserContext);

    // let [user, setUser] = useState(currentUser)

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser(validation.values.name, validation.values.email)
        validation.setIsValid(false)
    }

    useEffect(() => {
        validation.setValues({ name: currentUser.name, email: currentUser.email })
    }, [currentUser]);

    return (
        <div className="profile">
            <h3 className="profile__title">Привет {currentUser.name}!</h3>
            <form className="profile__form" onSubmit={handleSubmit}>

                <label className="profile__input-label" htmlFor="nameUser">Имя
                    <input
                        className="profile__input"
                        type="text"
                        name="name"
                        id="nameUser"
                        minLength={3}

                        value={validation.values.name}
                        onChange={validation.handleProfileChange}
                    />
                </label>
                <ErrorMessage />
                <label className="profile__input-label" htmlFor="email">Почта
                    <input
                        className="profile__input"
                        type="email"
                        name="email"
                        id="email"
                        value={validation.values.email}
                        onChange={validation.handleProfileChange}
                    />
                </label>
                <ErrorMessage />
                <span className="profile__error-message"></span>

                <button
                    type="button"
                    className={`profile__edit-btn ${validation.isValid ? 'profile__edit-btn_active' : ''}`}
                    onClick={handleSubmit}
                    disabled={!validation.isValid}
                >Редактировать</button>

            </form>

            <button type="button" className="profile__sign-out-btn" onClick={props.handleLogout}>Выйти из аккаунта</button>
        </div>
    );
}


export default Profile;