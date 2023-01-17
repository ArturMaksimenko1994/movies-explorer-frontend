import React from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './../Form/Form';
import FormLabel from './../FormLabel/FormLabel';
import FormInput from './../FormInput/FormInput';
import FormSubmitBtn from './../FormSubmitBtn/FormSubmitBtn';

import * as auth from './../../utils/auth.js';

import { useFormWithValidation } from '../../utils/validation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const Login = (props) => {

    const validation = useFormWithValidation();

    const navigate = useNavigate();

    //Запись токена и редирект в movies
    function logIn(token) {
        localStorage.setItem("token", token);
        props.handleLogin();
        navigate('/', { replace: true });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.authorize(validation.values.email, validation.values.password).then((res) => {
            if (res.token) {
                logIn(res.token);
            } else {
                props.openErrorPopup(); 
            }
        }).catch((err) => {
            props.openErrorPopup()
        }
        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            
            <FormLabel label="Email" name={'email'}>
                <FormInput
                    type="email"
                    inputName={'email'}
                    nameId={'emailAutorize'}
                    value={validation.values.value}
                    onChange={validation.handleChange}
                    minLength="5"
                    maxLength="200"
                />
                <ErrorMessage isActive={validation.errors.email} message={`Введите корректный email`} />
            </FormLabel>

            <FormLabel label="Пароль" name={'password'}>
                <FormInput
                    type="password"
                    inputName={'password'}
                    nameId={'passwordAutorize'}
                    value={validation.values.value}
                    onChange={validation.handleChange}
                    minLength="5"
                    maxLength="200"
                />
                <ErrorMessage isActive={validation.errors.password} message={`Введите пароль`} />
            </FormLabel>

            <FormSubmitBtn isValid={validation.isValid} text={'Войти'}/>
        </Form>
    );
}
export default Login;
