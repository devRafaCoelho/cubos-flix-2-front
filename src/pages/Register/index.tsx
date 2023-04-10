import { Button, Typography } from '@mui/material'
import DefaultTextField from '../../components/DefaultTextField'
import { FormContainer, MainContainer } from '../../styles/styles'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <MainContainer maxWidth={false} disableGutters>
      <FormContainer maxWidth="lg" disableGutters as="form">
        <Typography component="h1" variant="h1">
          Cadastre-se!
        </Typography>
        <DefaultTextField name="Nome" type="text" />
        <DefaultTextField name="E-mail" type="email" />
        <DefaultTextField name="Senha" type="password" />
        <DefaultTextField name="Confirmar Senha" type="password" />
        <Button type="submit" variant="contained">
          Finalizar Cadastro
        </Button>
        <Typography component="p" variant="subtitle1">
          Já possui uma conta? <Link to="/login">Faça o Login!</Link>
        </Typography>
      </FormContainer>
    </MainContainer>
  )
}
