import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';
import './Film.css'

const Film = () => {

  const {idFilm} = useParams()

  const url = "https://ghibliapi.herokuapp.com/films"

  const [dataFilm, setDataFilm] = useState([])

  const getDataFilm = () => {
    axios.get(`${url}/${idFilm}`)
      .then(res => {
        setDataFilm(res.data)
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })

  }


  useEffect(() => {
    getDataFilm()
  }, [])

  return (
    <div className=''>
      <div className='display flex flex-col items-center w-screen mb-10'>
        <h1 className='my-10 font-black text-2xl'>{dataFilm.title}</h1>
        <img className='mb-10' src={dataFilm.image} alt="dataFilm img" />
        <div className='text-center px-10'>
          <p>Description: {dataFilm.description}</p>
          <br />
          <p><p className='font-black'>Director: </p>{dataFilm.director}</p>
          <p><p className='font-black'>Producer: </p>{dataFilm.producer}</p>
          <p><p className='font-black'>Original title: </p>{dataFilm.original_title}</p>
          <p><p className='font-black'>Original title romanised: </p>{dataFilm.original_title_romanised}</p>
          <p><p className='font-black'>Rotten Tomatoes score: </p>{dataFilm.rt_score}</p>
          <p><p className='font-black'>Release date: </p>{dataFilm.release_date}</p>
          <p><p className='font-black'>Running time: </p>{dataFilm.running_time} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Film;
