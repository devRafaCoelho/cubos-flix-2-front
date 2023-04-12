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
    background-color: ${theme.palette.primary.main};

    @media screen and (max-width: 615px) {
      padding: 10px;
      flex-direction: column-reverse;
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
    /* color: white; */
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
