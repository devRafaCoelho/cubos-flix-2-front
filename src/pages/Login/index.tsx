import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Typography } from '@mui/material'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import DefaultTextField from '../../components/DefaultTextField'
import { schemaLogin } from '../../schemas/schemas'
import { api } from '../../services/api'
import { FormContainer, MainContainer } from '../../styles/styles'

type UserData = {
  id: number
  email: string
  password: string
}

export default function LoginPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<UserData>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { mutate } = useMutation(api.loginUser, {
    onSuccess: () => {
      navigate('/home')
    },
    onError: (error: AxiosError<any>) => {
      if ((error as any).response.data?.error) {
        const errorData = Object.getOwnPropertyNames((error as any).response.data?.error)
          .filter((key) => key as keyof UserData)
          .map((key) => key as keyof UserData)

        errorData.map((elementData) => {
          setError(
            elementData,
            {
              type: 'manual',
              message: (error as any).response.data?.error[elementData]
            },
            {
              shouldFocus: true
            }
          )
        })
      }
    }
  })

  async function onSubmit(data: UserData) {
    mutate(data)
  }

  return (
    <MainContainer maxWidth={false} disableGutters>
      <FormContainer disableGutters as="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography component="h1" variant="h1">
          Faça seu Login!
        </Typography>

        <DefaultTextField
          name="email"
          type="email"
          label="E-mail"
          register={register}
          errors={errors}
        />

        <DefaultTextField
          name="password"
          type="password"
          label="Senha"
          register={register}
          errors={errors}
        />

        <Button type="submit" variant="contained">
          <Typography component="span" variant="body1">
            Entrar
          </Typography>
        </Button>

        <Typography component="p" variant="subtitle1">
          Ainda não possui uma conta? <Link to="/register">Cadastre-se!</Link>
        </Typography>
      </FormContainer>
    </MainContainer>
  )
}
