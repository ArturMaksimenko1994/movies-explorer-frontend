import React from 'react';

import Form from './../Form/Form';
import FormLabel from './../FormLabel/FormLabel';
import FormInput from './../FormInput/FormInput';
import FormErrorMessage from './../FormErrorMessage/FormErrorMessage';
import FormSubmitBtn from './../FormSubmitBtn/FormSubmitBtn';

const Login = () => (
    <Form>

        <FormLabel label="E-mail" name={'name'}>
            <FormInput
                type="text"
                inputName={'E-mail'}
            />
        </FormLabel>

        <FormLabel label="Пароль" name={'password'}>
            <FormInput
                type="password"
                inputName={'password'}
            />
        </FormLabel>


        <FormErrorMessage />

        <FormSubmitBtn
            text={'Войти'}
        />
    </Form>
);

export default Login;
