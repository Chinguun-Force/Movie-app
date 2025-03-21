'use client'

import Rating from '@/components/Rating';
import Image from "next/image"
import { Play, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ACCESS_TOKEN } from '@/constants';
import { instance } from '@/utils/axios-instance';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
type MovieDetailType = {
 adult: boolean
 backdrop_path: string
  belongs_to_collection: string
  budget: number
  genres: {id: number, name: string}[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {id: number, logo_path: string, name: string, origin_country: string}[]
  production_countries: {iso_3166_1: string, name: string}[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {english_name: string, iso_639_1: string, name: string}[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
type personType = {
  name: string
  job: string
  profile_path: string
}
const page = () => {
  const [movieDetail, setMovieDetail] = useState<MovieDetailType | null>(null)
  const [cast, setCast] = useState<any>(null)
  const [crew, setCrew] = useState<any>(null)
  const [directors, setDirectors] = useState<any>("")

  const getMovies = async () => {
    const movie = await instance.get(`/movie/${params.id}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    setMovieDetail(movie.data)
  };
  const getMovieTeam = async () => {
    const teams = await instance.get(`/movie/${params.id}/credits?language=en-US`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    setCast(teams.data.cast)
    setCrew(teams.data.crew)
    setDirectors (crew.filter((person:personType) => person.job === "Director"))
  }
  useEffect(() => {
    getMovies();
    getMovieTeam()
  }, [])
  const params = useParams()
  console.log("directors", directors)
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        {/* Movie Title and Info */}
        <div className='flex justify-between items-center'>
          <div>
            <h1 className="text-2xl font-bold">{movieDetail?.title}</h1>
            <p className="text-sm text-muted-foreground">{movieDetail?.release_date} · {movieDetail?.origin_country[0]} · {movieDetail?.runtime} mi</p>
          </div>
          <div className='text-right'>
            <Rating value={movieDetail?.vote_average ?? 0}/>
            <span className='text-sm'>{movieDetail?.vote_count}</span>
          </div>
        </div>

        {/* Movie Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Poster */}
          <div className="md:col-span-1">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
              alt="Wicked movie poster"
              width={200}
              height={400}
              quality={100}
              className="rounded-md w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Banner */}
          <div className="md:col-span-2 relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
              alt={`${movieDetail?.title} movie banner`}
              width={760}
              height={400}
              className="rounded-md w-full h-full object-cover brightness-50"
              quality={100}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/30 rounded-md"></div>
              <div className="absolute bottom-10 transform left-0 translate-x-1/2 -translate-y-1/2 text-center text-white flex items-center gap-2">
                <Button
                  variant="outline"
                  className="rounded-full border-white text-black hover:bg-black/70 w-8 h-8"
                >
                  <Play /> 
                </Button>
                  Play trailer
              </div>
            </div>
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {movieDetail?.genres.map((genre) => (
            <Badge variant="secondary" className="rounded-full" key={genre.id}>
              {genre.name}
            </Badge>
          ))}
         
        </div>

        {/* Synopsis */}
        <div>
          <p className="text-sm md:text-base">
            {movieDetail?.overview}
          </p>
        </div>

        {/* Movie Details */}
        <div className=" rounded-md overflow-hidden">
      {/* Director Row */}
      <div className="grid grid-cols-[1fr,3fr] border-b">
        <div className="font-bold p-4 bg-white">Director</div>
        <div className="p-4 bg-white">{}</div>
      </div>

      {/* Writers Row */}
      <div className="grid grid-cols-[1fr,3fr] border-b">
        <div className="font-bold p-4 bg-white">Writers</div>
        <div className="p-4 bg-white">
          {/* {writers.map((writer, index) => (
            <React.Fragment key={writer}>
              {writer}
              {index < writers.length - 1 && <span className="mx-1">·</span>}
            </React.Fragment>
          ))} */}
        </div>
      </div>

      {/* Stars Row */}
      <div className="grid grid-cols-[1fr,3fr]">
        <div className="font-bold p-4 bg-white">Stars</div>
        <div className="p-4 bg-white">
          {/* {stars.map((star, index) => (
            <React.Fragment key={star}>
              {star}
              {index < stars.length - 1 && <span className="mx-1">·</span>}
            </React.Fragment>
          ))} */}
        </div>
      </div>
    </div>

        {/* More Like This */}
        <div className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">More like this</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              See more <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {/* Gladiator II */}
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg?height=250&width=170"
                    alt="Gladiator II"
                    width={170}
                    height={250}
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">8.0</span>
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">Gladiator II</h3>
                </div>
              </CardContent>
            </Card>

            {/* Deadpool & Wolverine */}
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg?height=250&width=170"
                    alt="Deadpool & Wolverine"
                    width={170}
                    height={250}
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">8.0</span>
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">Deadpool & Wolverine</h3>
                </div>
              </CardContent>
            </Card>

            {/* Dogfriends and the Three Bears: Dark */}
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg?height=250&width=170"
                    alt="Dogfriends and the Three Bears: Dark"
                    width={170}
                    height={250}
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">7.0</span>
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">Dogfriends and the Three Bears: Dark</h3>
                </div>
              </CardContent>
            </Card>

            {/* A Real Pain */}
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg?height=250&width=170"
                    alt="A Real Pain"
                    width={170}
                    height={250}
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">6.8</span>
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">A Real Pain</h3>
                </div>
              </CardContent>
            </Card>

            {/* Red One */}
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="space-y-2">
                  <Image
                    src="/placeholder.svg?height=250&width=170"
                    alt="Red One"
                    width={170}
                    height={250}
                    className="rounded-md w-full h-auto object-cover"
                  />
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">6.5</span>
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">Red One</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
