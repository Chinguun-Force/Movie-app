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
import axios, { isCancel, AxiosError } from 'axios';
import Gallery from "@/components/Gallery";

import { ChevronRight, Film, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { instance } from "../utils/axios-instance";


import { PosterSwiper } from "@/components/PosterSwiper";
import GenreSelector from "@/components/GenreSelector";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  const [movieList, setMovieList] = useState([])
  const [genreId, setGenreId] = useState(18);
  const [searchValue, setSearchValue] = useState("")
  const [nowPlayingMovies, setNowPLayingMovies] = useState([])
  const [upComingMovies, setUpComingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const getMovies = async () => {
    const movies = await axios.get(`https://api.themoviedb.org/3/${(searchValue === "" ? "discover" : "search")}/movie?language=en&with_genres=${genreId}&query=${searchValue}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    setMovieList(movies.data.results)
    console.log(movies.data.results)
    // const movies = await res.json();
  };
  const getNowPlayingMovies = async()=>{
      const nowPlayingmovies = await instance.get(`/movie/now_playing`)
      setNowPLayingMovies(nowPlayingmovies.data.results)
  }
  const getUpComingMovies = async()=>{
    const upComingMovies = await instance.get(`/movie/upcoming?language=en&with_genres=${genreId}&query=${searchValue}`)
    setUpComingMovies(upComingMovies.data.results)
  }
  const getTopRatedMovies = async()=>{
    const topRatedMovies = await instance.get(`/movie/top_rated?language=en&with_genres=${genreId}&query=${searchValue}`)
    setTopRatedMovies(topRatedMovies.data.results)
  }
  const getPopularMovies = async()=>{
    const popularMovies = await instance.get(`/movie/popular?language=en&with_genres=${genreId}&query=${searchValue}`)
    setPopularMovies(popularMovies.data.results)
  }
  useEffect(() => {
    getMovies();
    getNowPlayingMovies();
    getUpComingMovies();
    getTopRatedMovies();
    getPopularMovies();
  }, [genreId, searchValue])
  console.log(searchValue)
  const movieRanks = [
    "Popular",
    "Top rated",
    "Upcoming"
  ]
  return (
    <div className="p-0">
      <Nav setGenreId = {setGenreId} genreId={genreId} setSearchValue={setSearchValue}/>
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