import { Container, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

export const MainContainer = styled(Container)`
  ${({ theme }) => css`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(
      to bottom,
      ${theme.palette.primary.light},
      ${theme.palette.primary.main}
    );
  `}
`

export const FormContainer = styled(Container)`
  ${({ theme }) => css`
    max-width: 500px;
    width: 100%;
    margin: auto 10px;
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    position: relative;

    background-color: ${theme.palette.common.white};
    border-radius: 30px;

    a {
      color: ${theme.palette.primary.main};
    }

    @media screen and (max-width: 350px) {
      padding: 20px 10px;
    }
  `}
`

export const ContainerModal = styled(Container)`
  ${({ theme }) => css`
    min-height: 100vh;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.palette.grey[100]};
  `}
`

export const CustomCloseIcon = styled('svg')`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
