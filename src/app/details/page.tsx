'use client'
import { ACCESS_TOKEN } from '@/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: [];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
}
const page = () => {
  const [movieList, setMovieList] = useState<MovieDetailType | null>(null)
  const getMovies = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/777443?language=en-US`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    setMovieList(movie.data)
    console.log(movie)
  };
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className='w-[1080px] mx-auto'>
      <div className='flex justify-between items-center'>
        <div>
          <h1>{movieList?.title}</h1>
          <p>{movieList?.overview}</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default page
