import FormUser from '../../components/FormUser'
import Header from '../../components/Header'
import ModalLogout from '../../components/ModalLogout'
import PaginatedMovies from '../../components/PaginatedMovies'
import useAppContext from '../../hooks/useAppContex'
import { HomeContainer } from './styles'

export default function HomePage() {
  const { openModalLogout, setOpenModalLogout, openUserForm, setOpenUserForm } = useAppContext()

  return (
    <>
      <Header />
      <HomeContainer maxWidth={false} disableGutters>
        <PaginatedMovies />
      </HomeContainer>
      {openModalLogout && <ModalLogout close={() => setOpenModalLogout(!openModalLogout)} />}
      {openUserForm && <FormUser close={() => setOpenUserForm(!openUserForm)} />}
    </>
  )
}
