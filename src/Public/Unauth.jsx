import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './Login';

const Unauth = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Unauth;
