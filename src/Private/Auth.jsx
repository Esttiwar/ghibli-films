import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from './Layout';
import Films from './Films';
import Film from './Film';

const Auth = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='films'  element={<Films/>} />
        <Route path='films/:idFilm'  element={<Film/>} />
      </Route>
    </Routes>
  );
};

export default Auth;
