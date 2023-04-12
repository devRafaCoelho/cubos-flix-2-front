import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { api } from '../../services/api'
import {
  IconNext,
  IconPrev,
  InfoContainer,
  MovieCard,
  PaginatedMoviesContainer,
  TitleMovie,
  Wrapper
} from './styles'
import useAppContext from '../../hooks/useAppContex'
import MovieModal from '../MovieModal'

type MovieProps = {
  id: string
  title: string
  vote_average: number
  poster_path: string
}

export default function PaginatedMovies() {
  const { data } = useQuery('movies-data', api.listMovies)
  const [page, setPage] = useState(0)
  const { openMovieModal, setOpenMovieModal, selectedMovieId, setSelectedMovieId } = useAppContext()

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
    <>
      {filteredMovies && (
        <PaginatedMoviesContainer maxWidth={false} disableGutters>
          <IconPrev
            as={ArrowBackIcon}
            onClick={handlePrevClick}
            cursor="pointer"
            fontSize="large"
            sx={{ display: page === 0 ? 'none' : 'flex' }}
          />
          {filteredMovies.map((movie: MovieProps) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              onClick={() => {
                setSelectedMovieId(movie.id)
                setOpenMovieModal(!openMovieModal)
              }}
            >
              <InfoContainer>
                <TitleMovie variant="subtitle2" color="white">
                  {movie.title}
                </TitleMovie>
                <Wrapper>
                  <StarIcon sx={{ color: '#F5C518' }} fontSize="small" />
                  <Typography component="span" variant="subtitle2" color="white">
                    {movie.vote_average}
                  </Typography>
                </Wrapper>
              </InfoContainer>
            </MovieCard>
          ))}
          <IconNext
            as={ArrowForwardIcon}
            onClick={handleNextClick}
            cursor="pointer"
            fontSize="large"
            sx={{ display: page === totalPages - 1 ? 'none' : 'flex' }}
          />
        </PaginatedMoviesContainer>
      )}

      {openMovieModal && selectedMovieId !== null && (
        <MovieModal
          idMovie={selectedMovieId}
          close={() => {
            setSelectedMovieId('')
            setOpenMovieModal(!openMovieModal)
          }}
        />
      )}
    </>
  )
}
