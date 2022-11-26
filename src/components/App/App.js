import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './../Header/Header';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import User from './../User/User';
import PageNotFound from './../PageNotFound/PageNotFound';
import Register from './../Register/Register';
import Login from './../Login/Login';
import Profile from './../Profile/Profile';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/signup" element={
          <User title="Добро пожаловать!">
            <Register />
          </User>} />
          
        <Route path="/signin" element={
          <User title="Рады видеть!">
            <Login />
          </User>} />

          <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}



export default App; 
