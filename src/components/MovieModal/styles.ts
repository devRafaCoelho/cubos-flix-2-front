import { Container, Box, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

type BoxImageProps = {
  backdrop_path: string
}

type BackgroundBoxProps = {
  average?: boolean
}

type IconLike = {
  color: string
}

export const Icon = styled('svg')`
  font-size: 50px;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  color: white;
`

export const ContainerContent = styled(Container)`
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const BoxImage = styled(Box)<BoxImageProps>`
  width: 100%;
  min-height: 415px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ backdrop_path }) =>
    `url(http://image.tmdb.org/t/p/original/${backdrop_path})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const IconPlay = styled('svg')`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.white};
`

export const CustomBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const BackgroundBox = styled(Box)<BackgroundBoxProps>`
  ${({ theme, average }) => css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${average ? theme.palette.secondary.main : theme.palette.primary.main};
  `}
`

export const IconFavorite = styled('svg')<IconLike>`
  ${({ theme, color }) => css`
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: ${color === 'white' ? theme.palette.common.white : theme.palette.error.main};
  `}
`

export const IconDeleteFavorite = styled('svg')`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: ${theme.palette.common.white};
  `}
`
