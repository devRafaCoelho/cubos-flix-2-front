import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'
import { useState } from 'react'
import useAppContext from '../../hooks/useAppContex'
import { InputContainer } from './styles'

export default function SearchInput() {
  const [expanded, setExpanded] = useState(false)
  const { searchQuery, setSearchQuery } = useAppContext()

  function handleExpand(event: any) {
    event.preventDefault()
    setExpanded(!expanded)
  }

  function handleSearch(event: any) {
    event.preventDefault()
  }

  function handleInputChange(event: any) {
    setSearchQuery(event.target.value)
  }

  return (
    <InputContainer as="form" expanded={expanded} onSubmit={handleSearch}>
      <InputBase
        placeholder="Pesquisar"
        inputProps={{ 'aria-label': 'pesquisar' }}
        sx={{ ml: 1, flex: 1 }}
        onChange={handleInputChange}
        value={searchQuery}
      />

      <IconButton type="submit" aria-label="pesquisar" sx={{ p: '5px' }} onClick={handleExpand}>
        <SearchIcon />
      </IconButton>
    </InputContainer>
  )
}
