'use client'
import { Film, Moon, Search } from 'lucide-react'
import React, { useState } from 'react'
import GenreSelector from './GenreSelector'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Nav = () => {
  const [genreId, setGenreId] = useState(18);
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="flex items-center justify-around h-24">
        <Link href={`/`}>
        <div className="flex">
          <Film className="text-indigo-700" />
          <span className="text-indigo-700">Movie Z</span>
        </div>
        </Link>
        <div className="flex gap-4">
          <GenreSelector setGenreId={setGenreId} genreId={genreId}/>
          <div className="flex items-center border border-gray-300 rounded-md">
            <Search />
            <Input placeholder={`Search...`} className="border-none selection:border-none" onChange={(e) => setSearchValue(e.currentTarget.value)} />
          </div>

        </div>
        <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50" onClick={() => { }}>
          <Moon className="text-black" />
        </Button>
      </div>
  )
}

export default Nav
