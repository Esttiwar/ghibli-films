import React, { useState, useEffect } from 'react';
import axios from "axios"
import './Films.css'
import { Link } from 'react-router-dom';

const Films = () => {

  const url = "https://ghibliapi.herokuapp.com/films"

  const [dataFilms, setDataFilms] = useState([])

  const getDataFilms = () => {
    axios.get(url)
      .then(res => {
        setDataFilms(res.data)
        console.log(dataFilms);
      })
      .catch(error => {
        console.log(error);
      })

  }


  useEffect(() => {
    getDataFilms()
  }, [])

  return (
    <div className='display flex w-screen flex-wrap justify-around bg-container'>
      {dataFilms.map(film => (
        <Link className='card display flex w-1/4 mx-2 my-6' key={film.id} to={film.id}>
          <div className='display flex flex-col items-center'> 
            <h1 className='font-black text-2xl mb-5'>{film.title}</h1>
            <img className='image-card' src={film.image} alt="portada" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Films;
