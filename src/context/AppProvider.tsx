import { createContext, useState } from 'react'
import { getItem } from '../utils/storage'

type AppContextType = {
  openUserForm: boolean
  setOpenUserForm: (value: boolean) => void
  openModalLogout: boolean
  setOpenModalLogout: (value: boolean) => void
  openMovieModal: boolean
  setOpenMovieModal: (value: boolean) => void
  selectedMovieId: string | null
  setSelectedMovieId: (value: string) => void
  themeLocalStorage: string
  setThemeLocalStorage: (value: string) => void
}

export const AppContext = createContext<AppContextType>({
  openUserForm: false,
  setOpenUserForm: () => {},
  openModalLogout: false,
  setOpenModalLogout: () => {},
  openMovieModal: false,
  setOpenMovieModal: () => {},
  selectedMovieId: '',
  setSelectedMovieId: () => {},
  themeLocalStorage: 'light',
  setThemeLocalStorage: () => {}
})

export default function AppProvider({ children }: any) {
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openModalLogout, setOpenModalLogout] = useState(false)
  const [openMovieModal, setOpenMovieModal] = useState(false)
  const [selectedMovieId, setSelectedMovieId] = useState('')
  const [themeLocalStorage, setThemeLocalStorage] = useState(getItem('theme') || 'light')

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
        setSelectedMovieId,
        themeLocalStorage,
        setThemeLocalStorage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
