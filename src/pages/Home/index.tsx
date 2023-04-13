import FormUser from '../../components/FormUser'
import Header from '../../components/Header'
import Highlight from '../../components/Highlight'
import ModalLogout from '../../components/ModalLogout'
import PaginatedMovies from '../../components/PaginatedMovies'
import useAppContext from '../../hooks/useAppContex'
import { BackgroundContainer, HomeContainer } from './styles'

export default function HomePage() {
  const { openModalLogout, setOpenModalLogout, openUserForm, setOpenUserForm, themeLocalStorage } =
    useAppContext()

  return (
    <BackgroundContainer dark={themeLocalStorage === 'dark'} maxWidth={false} disableGutters>
      <Header />
      <HomeContainer maxWidth={false} disableGutters>
        <PaginatedMovies />
        <Highlight />
      </HomeContainer>
      {openModalLogout && <ModalLogout close={() => setOpenModalLogout(!openModalLogout)} />}
      {openUserForm && <FormUser close={() => setOpenUserForm(!openUserForm)} />}
    </BackgroundContainer>
  )
}
