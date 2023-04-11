import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A785ED',
      light: '#BCA4ED',
      dark: '#8250EB',
      contrastText: '#fff'
    },
    grey: {
      100: 'rgba(145, 154, 150, 0.3)'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.95rem'
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: '1.95rem'
    },
    subtitle1: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.125rem'
    }
  }
})
