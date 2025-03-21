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
const page = () => {
  const [movieDetail, setMovieDetail] = useState<MovieDetailType | null>(null)
  const getMovies = async () => {
    const movie = await instance.get(`/movie/${params.id}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    setMovieDetail(movie.data)
    
  };
  useEffect(() => {
    getMovies();
  }, [])
  const params = useParams()
  console.log("detail",movieDetail)
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        {/* Movie Title and Info */}
        <div className='flex justify-between items-center'>
          <div>
            <h1 className="text-2xl font-bold">Wicked</h1>
            <p className="text-sm text-muted-foreground">2024.11.28 · PG · 2h 40m</p>
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
              src="/placeholder.svg?height=400&width=270"
              alt="Wicked movie poster"
              width={270}
              height={400}
              className="rounded-md w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Banner */}
          <div className="md:col-span-2 relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Wicked movie banner"
              width={600}
              height={400}
              className="rounded-md w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/30 rounded-md"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-4">EVERYONE DESERVES THE CHANCE TO FLY</h2>
                <div className="text-5xl md:text-7xl font-bold mb-8">WICKED</div>
                <Button
                  variant="outline"
                  className="rounded-full bg-black/50 border-white text-white hover:bg-black/70"
                >
                  <Play className="mr-2 h-4 w-4" /> Play trailer
                </Button>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="font-semibold">Director</p>
            <p>Jon M. Chu</p>
          </div>
          <div className="space-y-1 md:col-span-2">
            <p className="font-semibold">Writers</p>
            <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Stars</p>
            <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
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
