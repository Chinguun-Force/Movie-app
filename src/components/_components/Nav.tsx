import { Film, Moon, Search } from 'lucide-react'
import React from 'react'
import GenreSelector from './GenreSelector'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Nav = (props) => {
  return (
    <div className="flex items-center justify-around h-24">
        <div className="flex">
          <Film className="text-indigo-700" />
          <span className="text-indigo-700">Movie Z</span>
        </div>
        <div className="flex gap-4">
          <GenreSelector setGenreId={setGenreId} genreId={genreId} />
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
