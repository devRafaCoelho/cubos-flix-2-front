import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { schemaUpdateUser } from '../../schemas/schemas'
import { api } from '../../services/api'
import { ContainerModal, CustomCloseIcon, FormContainer } from '../../styles/styles'
import { Button, Typography } from '@mui/material'
import DefaultTextField from '../DefaultTextField'
import CloseIcon from '@mui/icons-material/Close'

type UserData = {
  id: number
  name: string
  email: string
  password: string
  newPassword?: string
  confirmNewPassword?: string
}

export default function FormUser({ close }: { close: () => void }) {
  const { data } = useQuery('user-data', api.getUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue
  } = useForm<UserData>({
    resolver: yupResolver(schemaUpdateUser),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      newPassword: undefined,
      confirmNewPassword: undefined
    }
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation(api.updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user-data')
      close()
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

  useEffect(() => {
    if (data) {
      setValue('name', data.name)
      setValue('email', data.email)
    }
  }, [data])
  return (
    <ContainerModal maxWidth={false} disableGutters>
      <FormContainer disableGutters as="form" onSubmit={handleSubmit(onSubmit)}>
        <CustomCloseIcon as={CloseIcon} onClick={close} />
        <Typography component="h1" variant="h1">
          Edite seus Dados
        </Typography>

        <DefaultTextField
          name="name"
          type="text"
          label="Nome"
          register={register}
          errors={errors}
        />

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

        <DefaultTextField
          name="newPassword"
          type="password"
          label="Nova Senha"
          register={register}
          errors={errors}
        />

        <DefaultTextField
          name="confirmNewPassword"
          type="password"
          label="Confirmar Nova Senha"
          register={register}
          errors={errors}
        />

        <Button type="submit" variant="contained">
          <Typography component="span" variant="body1">
            Finalizar
          </Typography>
        </Button>
      </FormContainer>
    </ContainerModal>
  )
}
