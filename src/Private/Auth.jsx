import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import Films from './Films';
import Film from './Film';

const Auth = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index  element={<Films/>} />
        <Route path='film'  element={<Film/>} />
      </Route>
    </Routes>
  );
};

export default Auth;
