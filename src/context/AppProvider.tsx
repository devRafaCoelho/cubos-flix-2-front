import { createContext, useState } from 'react'

type AppContextType = {
  openUserForm: boolean
  setOpenUserForm: (value: boolean) => void
  openModalLogout: boolean
  setOpenModalLogout: (value: boolean) => void
  openMovieModal: boolean
  setOpenMovieModal: (value: boolean) => void
  selectedMovieId: number | null
  setSelectedMovieId: (value: number) => void
}

export const AppContext = createContext<AppContextType>({
  openUserForm: false,
  setOpenUserForm: () => {},
  openModalLogout: false,
  setOpenModalLogout: () => {},
  openMovieModal: false,
  setOpenMovieModal: () => {},
  selectedMovieId: 0,
  setSelectedMovieId: () => {}
})

export default function AppProvider({ children }: any) {
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openModalLogout, setOpenModalLogout] = useState(false)
  const [openMovieModal, setOpenMovieModal] = useState(false)
  const [selectedMovieId, setSelectedMovieId] = useState(0)

  return (
    <AppContext.Provider
      value={{
        openUserForm,
        setOpenUserForm,
        openModalLogout,
        setOpenModalLogout,
        openMovieModal,
        setOpenMovieModal,
        selectedMovieId,
        setSelectedMovieId
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
