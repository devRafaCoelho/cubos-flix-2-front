import { useQuery } from 'react-query'
import { ContainerModal } from '../../styles/styles'
import { api } from '../../services/api'
import { Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {
  BackgroundBox,
  BoxAverage,
  BoxGengres,
  BoxImage,
  ContainerContent,
  CustomBox,
  Icon
} from './styles'

type MovieModalProps = {
  idMovie: string
  close: () => void
}

export default function MovieModal({ idMovie, close }: MovieModalProps) {
  const { data } = useQuery('movie-data', () => api.getMovie(idMovie))

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
          <BoxGengres>
            {data?.genres.map((genre: { name: string }) => {
              return (
                <BackgroundBox>
                  <Typography component="span" variant="h4" color="white">
                    {genre.name}
                  </Typography>
                </BackgroundBox>
              )
            })}
          </BoxGengres>

          <BackgroundBox average>
            <Typography component="span" variant="h4" color="white">
              {data?.vote_average.toFixed(1)}
            </Typography>
          </BackgroundBox>
        </CustomBox>
      </ContainerContent>
    </ContainerModal>
  )
}
