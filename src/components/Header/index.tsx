import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import HomeIcon from '@mui/icons-material/Home'
import HomeIconOutlined from '@mui/icons-material/HomeOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { Switch, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useLocation } from 'react-router-dom'
import useAppContext from '../../hooks/useAppContex'
import { api } from '../../services/api'
import { getItem, setItem } from '../../utils/storage'
import SearchField from '../SearchField'
import {
  CustomAvatar,
  CustomBox,
  HeaderContainer,
  IconFavorite,
  IconHome,
  IconLogout
} from './styles'

export default function Header() {
  const {
    setUserData,
    openModalLogout,
    setOpenModalLogout,
    openUserForm,
    setOpenUserForm,
    setThemeLocalStorage
  } = useAppContext()
  const navigate = useNavigate()
  const location = useLocation()
  const [status, setStatus] = useState(location.pathname === '/home')

  const { data } = useQuery('user-data', api.getUser)

  const avatar = data ? data.name.split(' ') : []
  const avatarInitials =
    avatar.length > 1
      ? avatar[0].charAt(0).toUpperCase() + avatar[1].charAt(0).toUpperCase()
      : avatar[0]?.charAt(0).toUpperCase()

  function handleTheme() {
    const theme = getItem('theme') === 'light' ? 'dark' : 'light'

    setItem('theme', theme)
    setThemeLocalStorage(theme)
  }

  function handleNavigation(route: string) {
    setStatus(route === '/home')
    navigate(route)
  }

  useEffect(() => {
    setOpenModalLogout(false)
    setOpenUserForm(false)
    setStatus(location.pathname === '/home')
    setUserData(data)
  }, [location.pathname])

  return (
    <HeaderContainer maxWidth={false} disableGutters>
      <CustomBox>
        <Switch name="loading" color="default" onClick={() => handleTheme()} />
        <Typography component="h1" variant="h1" color="white">
          CUBOS-FLIX
        </Typography>
      </CustomBox>

      <CustomBox>
        <IconHome
          as={status ? HomeIcon : HomeIconOutlined}
          onClick={() => handleNavigation('/home')}
        />
        <IconFavorite
          as={status ? FavoriteBorderIcon : FavoriteIcon}
          onClick={() => handleNavigation('/favorites')}
        />
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
