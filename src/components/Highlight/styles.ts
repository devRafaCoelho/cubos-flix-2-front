import { Box, Container, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

type BoxTrailerProps = {
  backgroundImage: string
}

type BoxContentProps = {
  dark?: boolean
}

export const HighlightContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const BoxWrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BoxTrailer = styled(Box)<BoxTrailerProps>`
  ${({ backgroundImage }) => css`
    width: 55%;
    height: 311px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    cursor: pointer;
  `}
`

export const IconPlay = styled('svg')`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.palette.common.white};
`

export const BoxContent = styled(Box)<BoxContentProps>`
  ${({ theme, dark }) => css`
    width: 40%;
    height: 311px;
    padding: 16px;
    background-color: ${dark ? theme.palette.grey[600] : theme.palette.common.white};
    box-shadow: 0px 4px 4px ${dark ? theme.palette.grey[600] : theme.palette.grey[900]};
  `}
`
export const MarginBottomWrapper = styled(Box)`
  margin-bottom: 36px;
`
