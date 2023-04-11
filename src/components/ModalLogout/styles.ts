import { Container, Box, styled } from '@mui/material'
import { css } from '@mui/styled-engine'

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

export const CustomBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`
