import { Container, Box, Typography, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

type BackgroundContainerProps = {
  dark?: boolean
}

export const BackgroundContainer = styled(Container)<BackgroundContainerProps>`
  ${({ theme, dark }) => css`
    background-color: ${dark ? theme.palette.grey[700] : theme.palette.common.white};
  `}
`

export const FavoritesContainer = styled(Container)`
  max-width: 950px;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const MovieCard = styled(Box)<MovieProps>`
  ${({ theme, poster_path, dark }) => css`
    position: relative;
    width: 168px;
    min-height: 301px;

    background-image: ${`url(http://image.tmdb.org/t/p/original/${poster_path})`};
    background-size: cover;
    background-position: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px ${dark ? theme.palette.grey[600] : theme.palette.grey[900]};

    &:hover {
      transform: scale(1.03);
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const InfoContainer = styled(Box)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.palette.grey[800]};
  `}
`

export const TitleMovie = styled(Typography)`
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 3px;
`
