import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

type Movie = {
  id: number
  title: string
}

export default function PaginatedMovies() {
  const { data } = useQuery('movies-data', api.getMovies)
  const [page, setPage] = useState(0)

  const totalPages = Math.ceil((data?.results.length || 0) / 5)

  const startIndex = page * 5
  const endIndex = startIndex + 5
  const filteredMovies = data?.results.slice(startIndex, endIndex)

  function handlePrevClick() {
    setPage(page > 0 ? page - 1 : page)
  }

  function handleNextClick() {
    setPage(page < totalPages - 1 ? page + 1 : page)
  }

  return (
    <div>
      {filteredMovies && (
        <>
          {filteredMovies.map((movie: Movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
          <ArrowBackIcon
            onClick={handlePrevClick}
            cursor="pointer"
            sx={{ display: page === 0 ? 'none' : 'flex' }}
          />
          <ArrowForwardIcon
            onClick={handleNextClick}
            cursor="pointer"
            sx={{ display: page === totalPages - 1 ? 'none' : 'flex' }}
          />
        </>
      )}
    </div>
  )
}
