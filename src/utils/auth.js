export const BASE_URL = "https://api.artur.movie.nomoredomains.rocks"; //ссылка на url api

//проверка ответа
function checkResponce(res) {
    if (res.ok) {
        return res.json();
    } else {
        return `Ошибка: ${res.status}`;
    }
}

//регистрация
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    })

        .then((res) => {
            return checkResponce(res);
        });
};

//авторизация
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then((response) => {
            return checkResponce(response);
        })
        .then((res) => {
            return res;
        })
        .catch((error)=>{
            debugger
            console.log('12345' ,error)
        })
};

//токен
export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            return checkResponce(response);
        })
        .then((data) => data);
};