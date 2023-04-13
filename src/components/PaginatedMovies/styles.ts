import { Box, Container, Typography, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

type MovieProps = {
  title: string
  vote_average: number
  poster_path: string
  dark?: boolean
}

type IconProps = {
  dark?: boolean
  shouldHide: boolean
}

export const PaginatedMoviesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  position: relative;
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

export const IconPrev = styled('svg')<IconProps>`
  ${({ theme, dark, shouldHide }) => css`
    position: absolute;
    left: -40px;
    display: ${shouldHide ? 'none' : 'flex'};
    color: ${dark ? theme.palette.common.white : theme.palette.common.black};
  `}
`

export const IconNext = styled('svg')<IconProps>`
  ${({ theme, dark, shouldHide }) => css`
    position: absolute;
    right: -40px;
    display: ${shouldHide ? 'none' : 'flex'};
    color: ${dark ? theme.palette.common.white : theme.palette.common.black};
  `}
`

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 3px;
`
