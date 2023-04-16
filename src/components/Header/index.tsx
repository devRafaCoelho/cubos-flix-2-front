import LogoutIcon from '@mui/icons-material/Logout'
import { Switch, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import useAppContext from '../../hooks/useAppContex'
import { api } from '../../services/api'
import SearchField from '../SearchField'
import { CustomAvatar, CustomBox, HeaderContainer, IconLike, IconLogout } from './styles'
import { useEffect } from 'react'
import { getItem, setItem } from '../../utils/storage'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { openModalLogout, setOpenModalLogout, openUserForm, setOpenUserForm } = useAppContext()
  const { data } = useQuery('user-data', api.getUser)
  const { setThemeLocalStorage } = useAppContext()
  const navigate = useNavigate()

  const avatar = data ? data.name.split(' ') : []
  const avatarInitials =
    avatar.length > 1
      ? avatar[0].charAt(0).toUpperCase() + avatar[1].charAt(0).toUpperCase()
      : avatar[0]?.charAt(0).toUpperCase()

  useEffect(() => {
    setOpenModalLogout(false)
    setOpenUserForm(false)
  }, [])

  function handleTheme() {
    const theme = getItem('theme') === 'light' ? 'dark' : 'light'

    setItem('theme', theme)
    setThemeLocalStorage(theme)
  }

  return (
    <HeaderContainer maxWidth={false} disableGutters>
      <CustomBox>
        <Switch name="loading" color="default" onClick={() => handleTheme()} />
        <Typography component="h1" variant="h1" color="white">
          CUBOS-FLIX
        </Typography>
      </CustomBox>

      <CustomBox>
        <IconLike as={HomeIcon} onClick={() => navigate('/home')} />
        <IconLike as={FavoriteIcon} onClick={() => navigate('/favorites')} />
        <SearchField />
        <CustomAvatar onClick={() => setOpenUserForm(!openUserForm)}>
          <Typography component="h2" variant="h2">
            {avatarInitials}
          </Typography>
        </CustomAvatar>
        <IconLogout as={LogoutIcon} onClick={() => setOpenModalLogout(!openModalLogout)} />
      </CustomBox>
    </HeaderContainer>
  )
}
