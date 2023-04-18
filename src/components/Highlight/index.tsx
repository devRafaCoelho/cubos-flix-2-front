import { useQuery } from 'react-query'
import { BoxContent, BoxTrailer, BoxWrapper, HighlightContainer, IconPlay } from './styles'
import { Typography } from '@mui/material'
import { api } from '../../services/api'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import { MarginBottomWrapper } from './styles'
import useAppContext from '../../hooks/useAppContex'

export default function Highlight() {
  const { data } = useQuery('highlight', api.highlightMovie)
  const { themeLocalStorage } = useAppContext()

  const handleClick = () => {
    if (data?.linkVideo) {
      window.open(data.linkVideo, '_blank')
    }
  }

  return (
    <HighlightContainer maxWidth={false} disableGutters>
      <Typography
        component="h3"
        variant="h1"
        color={themeLocalStorage === 'dark' ? 'common.white' : 'common.black'}
      >
        Highlight do dia
      </Typography>

      <BoxWrapper>
        <BoxTrailer backgroundImage={data?.backgroundImage} onClick={handleClick}>
          <IconPlay as={SmartDisplayIcon} />
        </BoxTrailer>

        <BoxContent dark={themeLocalStorage === 'dark'}>
          <MarginBottomWrapper>
            <BoxWrapper>
              <Typography component="h3" variant="h1" color="secondary.main">
                {data?.title}
              </Typography>
              <Typography component="h3" variant="h1" color="primary.main">
                {data?.rating}
              </Typography>
            </BoxWrapper>

            <Typography
              component="span"
              variant="h5"
              color={themeLocalStorage === 'dark' ? 'common.white' : 'common.black'}
            >
              {data?.genres.join(', ')} / {data?.date}
            </Typography>
          </MarginBottomWrapper>

          <Typography
            component="p"
            variant="h6"
            color={themeLocalStorage === 'dark' ? 'common.white' : 'common.black'}
          >
            {data?.description}
          </Typography>
        </BoxContent>
      </BoxWrapper>
    </HighlightContainer>
  )
}
