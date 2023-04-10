import { Container, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

export const MainContainer = styled(Container)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main});
  `}
`

export const FormContainer = styled(Container)`
  ${({ theme }) => css`
    min-width: 500px;
    margin: auto 20px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;

    background-color: ${theme.palette.common.white};
    border-radius: 30px;

    a {
      color: ${theme.palette.primary.main};
    }

    @media screen and (max-width: 500px) {
      padding: 20px 10px;
    }
  `}
`
