import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

// импортируем компоненты приложения
import Header from './../Header/Header';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import User from './../User/User';
import PageNotFound from './../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
import Register from './../Register/Register';
import Login from './../Login/Login';
import Profile from './../Profile/Profile';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute'; // импортируем HOC

import moviesApi from '../../utils/MoviesApi'; //api
import mainApi from '../../utils/MainApi'; //api
import * as auth from "../../utils/auth"; //api

import { CurrentUserContext } from '../../contexts/currentUserContext';

//POPUP
import SomethingWentWrongPopup from '../SomethingWentWrongPopup/SomethingWentWrongPopup';
import NothingFoundPopup from '../NothingFoundPopup/NothingFoundPopup';
import WrongUserInfoPopup from '../WrongUserInfoPopup/WrongUserInfoPopup';
import UserInfoChangedPopup from '../UserInfoChangedPopup/UserInfoChangedPopup';
import TheUserExists from '../TheUserExists/TheUserExists';
import RegisterModalPopap from '../RegisterModalPopap/RegisterModalPopap';

// импортируем CSS
import './App.css';

function App() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [cards, setCards] = useState()

  const [savedCards, setSavedCards] = useState([]);

  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  //обработка ошибок POPUP
  const [isSomethingWentWrongPopupOpen, setIsSomethingWentWrongPopupOpen] = useState(false);
  const [isNothingFoundPopupOpen, setIsNothingFoundPopupOpen] = useState(false);
  const [isWrongUserInfoPopupOpen, setIsWrongUserInfoPopupOpen] = useState(false);
  const [isUserInfoChangedPopupOpen, setIsUserInfoChangedPopupOpen] = useState(false);
  const [isTheUserExists, setTheUserExists] = useState(false);
  const [isRegisterModalPopap, setRegisterModalPopap] = useState(false);

  const [loggedIn, setLoggedIn] = useState();
  const handleLogin = () => {
    setLoggedIn(true)
  }

  const [currentUser, setCurrentUser] = useState({});

  function handleTokenCheck() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
          else {
            handleLogout()
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      setLoggedIn(false)
    }
  }

  //функция добавляет количество карточек на странице в зависимости от windowWidth
  function handleResize(foundMovies) {
    if (windowWidth >= 1220) {
      setCards(foundMovies.slice(0, 12))
    }
    if (windowWidth >= 800 && windowWidth < 1220) {
      setCards(foundMovies.slice(0, 8))
    }
    if (windowWidth >= 500 && windowWidth < 800) {
      setCards(foundMovies.slice(0, 5))
    }
    if (windowWidth >= 320 && windowWidth < 500) {
      setCards(foundMovies.slice(0, 5))
    }
  }

  // кнопка добавления фильмов в зависимости от разрешения
  function loadMoreMovies() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies && windowWidth >= 1220) {
      setCards(foundMovies.slice(0, cards.length + 3));
    }
    else if (foundMovies) {
      setCards(foundMovies.slice(0, cards.length + 2));
    }
  }

  //лайк карточки
  function handleLike(movie) {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((movies) => {
        const savedMovie = movies.find(function (film) { return film.nameRU.includes(movie.nameRU) })
        if (savedMovie) {
          handleDeleteMovie(savedMovie);
        }
        else { handleSaveMovie(movie); }
      })
      .catch((err) => {
        openSomethingWentWrongPopup()
      })
      .finally(setIsLoading(false))
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie)
      .then(() => {
        setSavedCards((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => setIsSomethingWentWrongPopupOpen(true))

  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameEN: movie.nameEN,
      nameRU: movie.nameRU,
    })
      .then((data) => {
        setSavedCards([data, ...savedCards]);
      })
      .catch((err) => openSomethingWentWrongPopup())
  }

  // выход из приложения, удаления всех данных и редирект в main
  function handleLogout() {
    // setIsLoading(true)
    setLoggedIn(false);
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('token');
    localStorage.removeItem('keyWord');
    localStorage.removeItem('isCheckboxSelected');
    setCurrentUser({});
    setSavedCards([]);
    setCards([]);
    mainApi.updateToken();
    navigate('/', { replace: true });
  }

  //обновление данных пользователя
  function updateUserInfo(name, email) {
    handleTokenCheck()
    mainApi.updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setIsUserInfoChangedPopupOpen(true)
      })
      .catch(() => openSomethingWentWrongPopup())
  }

  //достаем из localStorage карточки
  useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies !== null) {
      handleResize(foundMovies)
    }
  }, []);

 
  useEffect(() => {
    mainApi.updateToken();
    mainApi.getUserInfoApi() //получение user-info и запись в currentUser
      .then((res) => {
        if (res._id) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      }
      )
      .catch((err) => {
        console.log(err)
      });
    mainApi.getSavedMovies()
      .then((res) => {
        setSavedCards(res);
        localStorage.setItem('savedCards', JSON.stringify(savedCards));
      })
      .catch((err) => {
        console.log(err)
      });
    moviesApi.getMovies() // получение фильмов и запись в localStorage
      .then((res) => {
        localStorage.setItem('foundMovies', JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err)
      });
    handleTokenCheck()
  },[loggedIn]);



  React.useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
  }, [windowWidth])

  React.useEffect(() => {
    const checkboxStatus = JSON.parse(localStorage.getItem('isCheckboxSelected'));
    if (checkboxStatus) {
      setIsCheckboxSelected(checkboxStatus)
    }
    else {
      setIsCheckboxSelected(false)
    }
  },
    []);

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  function isLiked(card) {
    return savedCards.some((item) => item.nameRU === card.nameRU)
  }

  function handleSetSavedCards(cards) {
    setSavedCards(cards)
  }

  //поиск фильма  компонент Movies
  function searchNewFilms(keyWord) {
    setIsLoading(true);
    handleTokenCheck();
    moviesApi.getMovies()
      .then((data) =>
        searchFilms(data, keyWord))
      .then((res) => {
        localStorage.setItem('foundMovies', JSON.stringify(res));
        localStorage.setItem('keyWord', keyWord);
        localStorage.setItem('isCheckboxSelected', isCheckboxSelected)
      })
      .then(() => {
        const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
        if (foundMovies.length === 0) {
          setIsNothingFoundPopupOpen(true)

        }
        else {
          handleResize(foundMovies);
        };
      })
      .catch((err) => openSomethingWentWrongPopup())
      .finally(() => setIsLoading(false))
  }

  //поиск 
  function searchSavedFilms(keyWord) {
    const movies = searchFilms(savedCards, keyWord);
    if (movies.length === 0) {
      setIsNothingFoundPopupOpen(true)
    }
    else {
      setSavedCards(movies)
    }
  }


  function searchFilms(movies, keyWord) {
    if (!isCheckboxSelected === true) {
      const foundMovies = movies.filter(function (item) { return item.nameEN.toLowerCase().includes(keyWord.toLowerCase()) || item.nameRU.toLowerCase().includes(keyWord.toLowerCase()) });
      return foundMovies
    }
    else {
      const foundMovies = movies.filter(function (item) { return item.duration < 40 && (item.nameEN.toLowerCase().includes(keyWord.toLowerCase()) || item.nameRU.toLowerCase().includes(keyWord.toLowerCase())) });
      return foundMovies
    }
  }

  function searchAllFilms() {
    setIsCheckboxSelected(true);
  }

  function searchShortFilms() {
    setIsCheckboxSelected(false);
  }

  //открытие POPUP
  function openSomethingWentWrongPopup() {
    setIsSomethingWentWrongPopupOpen(true)
  }

  //выход всех POPUP
  function closeAllPopups() {
    setIsSomethingWentWrongPopupOpen(false)
    setIsNothingFoundPopupOpen(false)
    setIsSomethingWentWrongPopupOpen(false)
    setIsWrongUserInfoPopupOpen(false)
    setIsUserInfoChangedPopupOpen(false)
    setTheUserExists(false)
    setRegisterModalPopap(false)
  }

  function openWrongUserInfoPopup() {
    setIsWrongUserInfoPopupOpen(true)
  }

  function openTheUserExists() {
    setTheUserExists(true)
  }

  function openRegisterModalPopap() {
    setRegisterModalPopap(true)
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        <Preloader isOpen={isLoading} />
        <SomethingWentWrongPopup isOpen={isSomethingWentWrongPopupOpen} onClose={closeAllPopups} />
        <NothingFoundPopup isOpen={isNothingFoundPopupOpen} onClose={closeAllPopups} />
        <WrongUserInfoPopup isOpen={isWrongUserInfoPopupOpen} onClose={closeAllPopups} />
        <UserInfoChangedPopup isOpen={isUserInfoChangedPopupOpen} onClose={closeAllPopups} />
        <TheUserExists isOpen={isTheUserExists} onClose={closeAllPopups} />
        <RegisterModalPopap isOpen={isRegisterModalPopap} onClose={closeAllPopups} />
        
        <Header loggedIn={loggedIn} />

        <Routes>

          <Route path="/movies" element={

            <ProtectedRoute
              loggedIn={loggedIn}
              saveCard={handleLike}
              component={Movies}
              cards={cards}

              onSearchMovies={searchNewFilms}
              isSelected={isCheckboxSelected}
              searchShortFilms={searchShortFilms}
              searchAllFilms={searchAllFilms}
              isLiked={isLiked}

              handleSetSavedCards={handleSetSavedCards}
              setIsCheckboxSelected={setIsCheckboxSelected}
              handleLoadMore={loadMoreMovies}
            />
          } />

          <Route path="/saved-movies" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
              savedCards={savedCards}
              deleteCard={handleDeleteMovie}
              isSelected={isCheckboxSelected}
              handleSetSavedCards={handleSetSavedCards}
              searchShortFilms={searchShortFilms}
              searchAllFilms={searchAllFilms}
              onSearchMovies={searchSavedFilms}
              setIsCheckboxSelected={setIsCheckboxSelected}
            />
          } />

          <Route path="/profile" element={
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              onUpdateUser={updateUserInfo}
              handleLogout={handleLogout}
            />
          } />

          <Route path="/" element={
            <Main />
          } />

          <Route path="/signup" element={
            <User title="Добро пожаловать!">
              <Register
              registerModalPopap={openRegisterModalPopap}
              handleLogin={handleLogin}
              openUserExists={openTheUserExists}
              openErrorPopup={openWrongUserInfoPopup} />
            </User>} />

          <Route path="/signin" element={
            <User title="Рады видеть!">
              <Login
                openErrorPopup={openWrongUserInfoPopup}
                loggedIn={loggedIn}
                handleLogin={handleLogin}
              />
            </User>} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App; 
