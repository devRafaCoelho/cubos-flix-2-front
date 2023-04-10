import { Container, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

export const MainContainer = styled(Container)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to bottom, #4b0082, #9400d3);
  `}
`

export const FormContainer = styled(Container)`
  ${({ theme }) => css`
    margin: auto 20px;
    padding: 40px 56px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;

    background-color: ${theme.palette.common.white};
    border-radius: 30px;

    @media screen and (max-width: 500px) {
      padding: 20px 10px;
    }
  `}
`
