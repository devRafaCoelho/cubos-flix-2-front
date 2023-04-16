import { Container, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

type BackgroundContainerProps = {
  dark?: boolean
}

export const BackgroundContainer = styled(Container)<BackgroundContainerProps>`
  ${({ theme, dark }) => css`
    background-color: ${dark ? theme.palette.grey[700] : theme.palette.common.white};
  `}
`

export const HomeContainer = styled(Container)`
  max-width: 950px;
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
