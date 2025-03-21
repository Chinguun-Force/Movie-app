'use client'
import { ACCESS_TOKEN } from '@/constants'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { Badge } from './ui/badge'
import Link from 'next/link'
type GenreType = {
    id : number;
    name: string;
  }
  type Props = {
    genreId: number;
    setGenreId: (genreId: number) => void;
  }
const GenreSelector = (props: Props) => {
    const [genreList, setGenreList] = React.useState<GenreType[]>([])
    const getGenreList = async () => {
        const genres = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`
            },
          }
        )
        setGenreList(genres.data.genres)
        console.log(genres.data.genres)
      }
      useEffect(() => {
        getGenreList();
      }, [])
  return (
    // <Select onValueChange={(value) => props.setGenreId(Number(value))}>
    //     <SelectTrigger className="w-[180px]">
    //       <SelectValue placeholder="Genre" />
    //     </SelectTrigger>
    //     <SelectContent>
    //       {genreList.map((genre: GenreType) => (
    //         <SelectItem key={genre.id} value={String(genre.id)}>{genre.name}</SelectItem>
    //       ))}
    //     </SelectContent>
    //   </Select>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ChevronDown/>
          Genre
          </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[580px] z-10 bg-white shadow-lg rounded-md flex flex-wrap gap-4 p-6 mt-2 border-2 border-slate-200">
        {genreList.map((genre: GenreType) => (
          <Link href={`/genreFilter/${genre.id}`}><Button className='text-black rounded-full bg-white shadow-lg border-slate-200 border-2 hover:text-white'><Badge className='text-black rounded-full bg-transparent' key={genre.id} onClick={() => props.setGenreId(genre.id)} >{genre.name}</Badge></Button></Link>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default GenreSelector
