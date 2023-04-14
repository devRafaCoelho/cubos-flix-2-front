import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import useAppContext from '../../hooks/useAppContex'
import { api } from '../../services/api'
import MovieModal from '../MovieModal'
import {
  IconNext,
  IconPrev,
  InfoContainer,
  MovieCard,
  PaginatedMoviesContainer,
  TitleMovie,
  Wrapper
} from './styles'

type MovieProps = {
  id: string
  title: string
  vote_average: number
  poster_path: string
}

export default function PaginatedMovies() {
  const {
    openMovieModal,
    setOpenMovieModal,
    selectedMovieId,
    setSelectedMovieId,
    themeLocalStorage,
    searchQuery
  } = useAppContext()
  const [page, setPage] = useState(0)
  const { data } =
    searchQuery === ''
      ? useQuery('movies-data', api.listMovies)
      : useQuery('find-movie', () => api.findMovie(searchQuery))

  const totalPages = Math.ceil((data?.results.length || 0) / 5)

  const startIndex = page * 5
  const endIndex = startIndex + 5
  const filteredMovies = data?.results.slice(startIndex, endIndex)

  function handlePrevClick() {
    setPage(Math.max(page - 1, 0))
  }

  function handleNextClick() {
    setPage(Math.min(page + 1, totalPages - 1))
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
            dark={themeLocalStorage === 'dark'}
            shouldHide={page === 0}
          />
          {filteredMovies.map((movie: MovieProps) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              dark={themeLocalStorage === 'dark'}
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
                  <StarIcon
                    sx={{ color: '#F5C518', width: '13px', height: '13px' }}
                    fontSize="small"
                  />
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
            dark={themeLocalStorage === 'dark'}
            shouldHide={page === totalPages - 1}
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
