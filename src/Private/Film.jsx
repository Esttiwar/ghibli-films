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
    <div className='display flex justify-center film bg-container px-20 h-screen w-full'>
        <div className='display w-1/2 flex flex-col items-center border-solid border-2 border-red-600'>
          <h1 className='my-10 font-black text-2xl'>{dataFilm.title}</h1>
          <img className='mb-10 h-3/4' src={dataFilm.image} alt="dataFilm img" />
        </div>
        <div className='text-start pt-28 px-10 w-1/2'>
          <p><p className='font-black'>Description: </p>{dataFilm.description}</p>
          <br />
          <p className='display flex'><p className='font-black'>Director: &nbsp; </p>{dataFilm.director}</p>
          <p className='display flex'><p className='font-black'>Producer: &nbsp;</p>{dataFilm.producer}</p>
          <p className='display flex'><p className='font-black'>Original title: &nbsp;</p>{dataFilm.original_title}</p>
          <p className='display flex'><p className='font-black'>Original title romanised: &nbsp;</p>{dataFilm.original_title_romanised}</p>
          <p className='display flex'><p className='font-black'>Rotten Tomatoes score: &nbsp;</p>{dataFilm.rt_score}</p>
          <p className='display flex'><p className='font-black'>Release date: &nbsp;</p>{dataFilm.release_date}</p>
          <p className='display flex'><p className='font-black'>Running time: &nbsp;</p>{dataFilm.running_time} minutes</p>
        </div>
    </div>
  );
};

export default Film;
