import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'
import { useQuery } from 'react-query'
import FormUser from '../../components/FormUser'
import Header from '../../components/Header'
import ModalLogout from '../../components/ModalLogout'
import { Wrapper } from '../../components/MovieModal/styles'
import { InfoContainer, MovieCard, TitleMovie } from '../../components/PaginatedMovies/styles'
import useAppContext from '../../hooks/useAppContex'
import { api } from '../../services/api'
import { BackgroundContainer, HomeContainer } from './styles'

type MovieProps = {
  id: string
  title: string
  vote_average: number
  poster_path: string
}

export default function FavoritesPage() {
  const {
    openModalLogout,
    setOpenModalLogout,
    openUserForm,
    setOpenUserForm,
    themeLocalStorage,
    setSelectedMovieId,
    setOpenMovieModal
  } = useAppContext()

  const { data } = useQuery('favorites', api.listFavorites)
  console.log(data)

  return (
    <BackgroundContainer dark={themeLocalStorage === 'dark'} maxWidth={false} disableGutters>
      <Header />
      <HomeContainer maxWidth={false} disableGutters>
        {data?.map((movie: MovieProps) => (
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
      </HomeContainer>

      {openModalLogout && <ModalLogout close={() => setOpenModalLogout(!openModalLogout)} />}
      {openUserForm && <FormUser close={() => setOpenUserForm(!openUserForm)} />}
    </BackgroundContainer>
  )
}
