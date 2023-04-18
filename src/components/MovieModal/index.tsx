import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import { Typography } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useLocation } from 'react-router-dom'
import useAppContext from '../../hooks/useAppContex'
import { api } from '../../services/api'
import { ContainerModal } from '../../styles/styles'
import {
  BackgroundBox,
  BoxImage,
  ContainerContent,
  CustomBox,
  Icon,
  IconDeleteFavorite,
  IconFavorite,
  IconPlay,
  Wrapper
} from './styles'

type MovieModalProps = {
  close: () => void
}

type MovieDataPost = {
  userId: number
  movie_id: string
  poster_path: string
  title: string
  vote_average: number
}

export default function MovieModal({ close }: MovieModalProps) {
  const { userData, selectedMovieId } = useAppContext()
  const location = useLocation()

  const { data } = useQuery('movie-data', () => api.getMovie(selectedMovieId || ''))
  const { data: favoritesData } = useQuery('favorites', api.listFavorites)

  const queryClient = useQueryClient()

  const { mutate } = useMutation(api.addFavorites, {
    onSuccess: () => {
      queryClient.invalidateQueries('favorites')
    }
  })

  const { mutate: deleteFavorite } = useMutation(api.deleteFavorite, {
    onSuccess: () => {
      close()
      queryClient.invalidateQueries('favorites')
    }
  })

  async function handleAdd(data: MovieDataPost) {
    mutate(data)
  }

  async function handleDelete(data: MovieDataPost) {
    deleteFavorite(data)
  }

  const movieData: MovieDataPost = {
    userId: userData?.id,
    movie_id: (selectedMovieId ?? '').toString(),
    poster_path: data?.poster_path || '',
    title: data?.title ?? '',
    vote_average: data?.vote_average || 0
  }

  const handleClick = () => {
    if (data?.linkVideo) {
      window.open(data.linkVideo, '_blank')
    }
  }

  return (
    <ContainerModal maxWidth={false} disableGutters>
      <Icon as={CloseIcon} onClick={close} />

      <ContainerContent maxWidth={false} disableGutters>
        <Typography component="h3" variant="h3" color="white">
          {data?.title}
        </Typography>

        <BoxImage backdrop_path={data?.backdrop_path}>
          <IconPlay cursor="pointer">
            <SmartDisplayIcon onClick={handleClick} />
          </IconPlay>
        </BoxImage>

        <Typography component="p" variant="body2" color="white">
          {data?.overview}
        </Typography>

        <CustomBox>
          <Wrapper>
            {data?.genres.map((genre: { name: string }) => {
              return (
                <BackgroundBox>
                  <Typography component="span" variant="h4" color="white">
                    {genre.name}
                  </Typography>
                </BackgroundBox>
              )
            })}
          </Wrapper>

          <Wrapper>
            {location.pathname !== '/favorites' ? (
              favoritesData?.some(
                (favorite: any) => Number(favorite.movie_id) === selectedMovieId
              ) ? (
                <IconFavorite as={FavoriteIcon} color="red" />
              ) : (
                <IconFavorite as={AddIcon} color="white" onClick={() => handleAdd(movieData)} />
              )
            ) : (
              <IconDeleteFavorite
                as={DeleteIcon}
                onClick={() => handleDelete(movieData?.movie_id)}
              />
            )}

            <BackgroundBox average>
              <Typography component="span" variant="h4" color="white">
                {data?.vote_average.toFixed(1)}
              </Typography>
            </BackgroundBox>
          </Wrapper>
        </CustomBox>
      </ContainerContent>
    </ContainerModal>
  )
}
