import { Container, Box, styled, Avatar } from '@mui/material'
import { css } from '@mui/styled-engine'

export const HeaderContainer = styled(Container)`
  ${({ theme }) => css`
    min-height: 80px;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${theme.palette.primary.main};

    @media screen and (max-width: 615px) {
      padding: 10px;
      flex-direction: column;
      gap: 10px;
    }
  `}
`

export const CustomBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 615px) {
    justify-content: center;
  }
`

export const CustomAvatar = styled(Avatar)`
  ${({ theme }) => css`
    width: 55px;
    height: 55px;
    background-color: ${theme.palette.grey[400]};
    cursor: pointer;
  `}
`

export const IconLogout = styled('svg')`
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
`

export const IconChangeTheme = styled('svg')`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
`

export const IconHome = styled('svg')`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.palette.common.white};
  `}
`
export const IconFavorite = styled('svg')`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.palette.common.white};
  `}
`
