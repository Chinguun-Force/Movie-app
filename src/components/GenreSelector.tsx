import { ACCESS_TOKEN } from '@/constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
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
    <Select onValueChange={(value) => props.setGenreId(Number(value))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent>
          {genreList.map((genre: GenreType) => (
            <SelectItem key={genre.id} value={String(genre.id)}>{genre.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
  )
}

export default GenreSelector
