import { Button, Typography } from '@mui/material'
import { ContainerModal, CustomBox } from './styles'
import { logOut } from '../../utils/storage'
import { useNavigate } from 'react-router'
import { FormContainer } from '../../styles/styles'

export default function ModalLogout({ close }: { close: () => void }) {
  const navigate = useNavigate()

  return (
    <ContainerModal maxWidth={false} disableGutters>
      <FormContainer maxWidth="xs">
        <Typography component="h1" variant="h1">
          Deseja sair da conta?
        </Typography>
        <CustomBox>
          <Button
            type="button"
            variant="outlined"
            color="success"
            fullWidth
            onClick={() => {
              logOut()
              navigate('/login')
            }}
          >
            Sim
          </Button>
          <Button type="button" variant="outlined" color="error" fullWidth onClick={close}>
            Não
          </Button>
        </CustomBox>
      </FormContainer>
    </ContainerModal>
  )
}
