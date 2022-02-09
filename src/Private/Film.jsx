import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams, Link } from 'react-router-dom';
import './Film.css'
import { Icon } from '@iconify/react';

const Film = () => {

  const {idFilm} = useParams()

  const url = "https://ghibliapi.herokuapp.com/films"

  const [dataFilm, setDataFilm] = useState([])

  const getDataFilm = () => {
    axios.get(`${url}/${idFilm}`)
      .then(res => {
        setDataFilm(res.data)
      })
      .catch(error => {
        console.log(error);
      })

  }


  useEffect(() => {
    getDataFilm()
  }, [])

  return (
    <div className='display flex justify-center film bg-container pl-5 pr-20 h-screen w-full pb-10'>
      <div>
        <Link to="/films">
          <button className='border-2 mt-10 border-black border-solid rounded-2xl my-3 px-5 bg-blue-300 hover:bg-blue-500'>Back</button>
        </Link>
      </div>
      <div className='display w-1/2 flex flex-col items-center container-title-img'>
        <h1 className='my-10 font-black text-2xl'>{dataFilm.title}</h1>
        <img className='mb-10 h-3/4' src={dataFilm.image} alt="dataFilm img" />
      </div>
      <div className='display flex flex-col justify-center text-start px-10 w-1/2 text'>
        <p className='description'><p className='font-black'>Description: </p>{dataFilm.description}</p>
        <br />
        <div className='text-data'>
          <p className='display flex'><p className='font-black'>Director: &nbsp; </p>{dataFilm.director}</p>
          <p className='display flex'><p className='font-black'>Producer: &nbsp;</p>{dataFilm.producer}</p>
          <p className='display flex'><p className='font-black'>Original title: &nbsp;</p>{dataFilm.original_title}</p>
          <p className='display flex'><p className='font-black'>Original title romanised: &nbsp;</p>{dataFilm.original_title_romanised}</p>
          <p className='display flex'><p className='font-black'>Rotten Tomatoes score: &nbsp;</p>{dataFilm.rt_score}</p>
          <p className='display flex'><p className='font-black'>Release date: &nbsp;</p>{dataFilm.release_date}</p>
          <p className='display flex'><p className='font-black'>Running time: &nbsp;</p>{dataFilm.running_time} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Film;
