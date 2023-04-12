import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A785ED',
      light: '#BCA4ED',
      dark: '#8250EB',
      contrastText: '#fff'
    },
    secondary: {
      main: '#E183C8'
    },
    grey: {
      100: 'rgba(145, 154, 150, 0.3)',
      200: 'rgba(0, 0, 0, 0.8);'
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
    h3: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: '3.375rem'
    },
    h4: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '1.875rem'
    },
    subtitle1: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.125rem'
    },
    subtitle2: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    body2: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: '1.875rem'
    }
  }
})
