import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from './Login';

const Unauth = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Unauth;
