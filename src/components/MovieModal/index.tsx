import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { ContainerModal } from '../../styles/styles'
import {
  BackgroundBox,
  BoxImage,
  ContainerContent,
  CustomBox,
  Icon,
  IconLikeBorder,
  Wrapper
} from './styles'
import { useState } from 'react'

type MovieModalProps = {
  idMovie: string
  close: () => void
}

export default function MovieModal({ idMovie, close }: MovieModalProps) {
  const { data } = useQuery('movie-data', () => api.getMovie(idMovie))
  const [color, setColor] = useState(false)

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
            <IconLikeBorder
              as={FavoriteIcon}
              onClick={() => setColor(!color)}
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
