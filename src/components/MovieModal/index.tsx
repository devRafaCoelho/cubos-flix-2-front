import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Typography } from '@mui/material'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import useAppContext from '../../hooks/useAppContex'
import { api } from '../../services/api'
import { ContainerModal } from '../../styles/styles'
import {
  BackgroundBox,
  BoxImage,
  ContainerContent,
  CustomBox,
  Icon,
  IconLike,
  Wrapper
} from './styles'

type MovieModalProps = {
  close: () => void
}

type MovieData = {
  movieId: string
  movieName: string
  title?: string
  backdrop_path?: string
  overview?: string
  genres?: { name: string }[]
  vote_average?: number
}

export default function MovieModal({ close }: MovieModalProps) {
  const { selectedMovieId } = useAppContext()
  const [color, setColor] = useState(false)

  const { data } = useQuery('movie-data', () => api.getMovie(selectedMovieId || ''))

  const { mutate } = useMutation(api.addFavorites, {
    onSuccess: () => {
      console.log('filme adicionado com sucesso!')
    }
  })

  async function onSubmit(data: MovieData) {
    mutate(data)
  }

  const movieData: MovieData = {
    movieId: selectedMovieId ?? '',
    movieName: data?.title ?? ''
  }

  return (
    <ContainerModal maxWidth={false} disableGutters>
      <Icon as={CloseIcon} onClick={close} />

      <ContainerContent maxWidth={false} disableGutters>
        <Typography component="h3" variant="h3" color="white">
          {data?.title}
        </Typography>

        <BoxImage backdrop_path={data?.backdrop_path} />

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
            <IconLike
              as={FavoriteIcon}
              onClick={() => {
                onSubmit(movieData)
                setColor(!color)
              }}
              color={color ? 'error' : 'white'}
            />

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
