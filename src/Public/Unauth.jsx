import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './Login';

const Unauth = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Navigate to="/ghibli-films/" />} />
    </Routes>
  );
};

export default Unauth;
