"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import formatVoteAverage2 from "@/utils/vote";

import { BASE_URL } from "@/constants";
import { instance } from "@/utils/axios-instance";
import { MovieTypes } from "@/app/page";


export function PosterSwiper() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [nowPlayingMovies, setNowPLayingMovies] = React.useState([]);
  const getNowPlayingMovies = async()=>{
        const nowPlayingmovies = await instance.get(`/movie/now_playing`)
        setNowPLayingMovies(nowPlayingmovies.data.results)
    }

  React.useEffect(() => {
      getNowPlayingMovies();
    }, [])
console.log(nowPlayingMovies)
  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full h-[600px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full h-[600px]">
        {nowPlayingMovies.slice(0, 3).map((movie: MovieTypes, index) => (
          <CarouselItem key={movie.id} className="w-full h-full relative">
            
            <img 
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-full h-full object-cover"
            />
            {/* Текст (Зураг бүр дээр харагдана) */}
            <div className="absolute left-[170px] bottom-[90px] w-[350px] h-[250px] flex flex-col items-start ">
              <p className="text-white text-[26px] font-normal leading-9">
                Now Playing:
              </p>
              <p className="text-white text-3xl font-bold leading-[40px]">
                {movie?.original_title}
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66658 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z"
                    fill="yellow"
                    stroke="yellow"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#FAFAFA] text-lg font-semibold">
                  {formatVoteAverage2(movie?.vote_average)}
                </p>
                <p className="text-gray-400 text-base">/10</p>
              </div>
              <p className="text-[#FAFAFA] text-[15px] leading-9 line-clamp-3">
                {movie?.overview}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[50px]" />
      <CarouselNext className="absolute right-[50px]" />
    </Carousel>
  );
}