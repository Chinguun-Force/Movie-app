export type MovieTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type GalleryProps = {
  movieType: MovieTypes[];
  movieList: [];
}

'use client'
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";
import axios from 'axios';
import Gallery from "@/components/Gallery";

import { ChevronRight, Film, Moon, Search } from "lucide-react";


import { instance } from "../utils/axios-instance";


import { PosterSwiper } from "@/components/PosterSwiper";

import Link from "next/link";


export default function Home() {
  const [movieList, setMovieList] = useState([])
  
  const [nowPlayingMovies, setNowPLayingMovies] = useState([])
  const [upComingMovies, setUpComingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  const getNowPlayingMovies = async()=>{
      const nowPlayingmovies = await instance.get(`/movie/now_playing`)
      setNowPLayingMovies(nowPlayingmovies.data.results)
  }
  const getUpComingMovies = async()=>{
    const upComingMovies = await instance.get(`/movie/upcoming?language=en`)
    setUpComingMovies(upComingMovies.data.results)
  }
  const getTopRatedMovies = async()=>{
    const topRatedMovies = await instance.get(`/movie/top_rated?language=en`)
    setTopRatedMovies(topRatedMovies.data.results)
  }
  const getPopularMovies = async()=>{
    const popularMovies = await instance.get(`/movie/popular?language=en`)
    setPopularMovies(popularMovies.data.results)
  }
  useEffect(() => {
    getNowPlayingMovies();
    getUpComingMovies();
    getTopRatedMovies();
    getPopularMovies();
  }, [])
 
  const movieRanks = [
    "Popular",
    "Top rated",
    "Upcoming"
  ]
  return (
    <div className="p-0">
      <Gallery movieList={movieList} />
      <PosterSwiper></PosterSwiper>
          {movieRanks.map((rank, index) => {
            return (
              <div key={index}
                className="w-[1438px] mx-auto my-12"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold mx-20 mb-12">{rank}</h1>
                  <div className="flex items-center mx-20 mb-12">
                  <Link href="/seemore">See more</Link>
                  <ChevronRight/>
                  </div>
                    </div>
                <Gallery movieList={rank === "Popular" ? popularMovies : rank === "Top rated" ? topRatedMovies : upComingMovies} />
              </div>
            );
          })}
    </div>

  )
}