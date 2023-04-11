import LogoutIcon from '@mui/icons-material/Logout'
import { Typography, IconButton, Switch, Paper } from '@mui/material'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { api } from '../../services/api'
import { logOut } from '../../utils/storage'
import FormUser from '../FormUser'
import { CustomAvatar, CustomBox, HeaderContainer, IconLogout } from './styles'
import ModalLogout from '../ModalLogout'
import { InputBase } from '@mui/material'
import SearchField from '../SearchField'

export default function Header() {
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openModalLogout, setOpenModalLogout] = useState(false)
  const navigate = useNavigate()
  const { data } = useQuery('user-data', api.getUser)

  const avatar = data ? data.name.split(' ') : []
  const avatarInitials =
    avatar.length > 1
      ? avatar[0].charAt(0).toUpperCase() + avatar[1].charAt(0).toUpperCase()
      : avatar[0]?.charAt(0).toUpperCase()

  return (
    <HeaderContainer maxWidth={false} disableGutters>
      <CustomBox>
        <Switch name="loading" color="default" />
        <Typography component="h1" variant="h1" color="white">
          CUBOS-FLIX
        </Typography>
      </CustomBox>

      <CustomBox>
        <SearchField />
        <CustomAvatar onClick={() => setOpenUserForm(!openUserForm)}>
          <Typography component="h2" variant="h2">
            {avatarInitials}
          </Typography>
        </CustomAvatar>
        <IconLogout as={LogoutIcon} onClick={() => setOpenModalLogout(!openModalLogout)} />
      </CustomBox>

      {openModalLogout && <ModalLogout close={() => setOpenModalLogout(!openModalLogout)} />}
      {openUserForm && <FormUser close={() => setOpenUserForm(!openUserForm)} />}
    </HeaderContainer>
  )
}
