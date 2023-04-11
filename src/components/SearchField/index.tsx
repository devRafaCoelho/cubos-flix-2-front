import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase } from '@mui/material'
import { InputContainer } from './styles'

export default function SearchInput() {
  const [expanded, setExpanded] = useState(false)

  function handleExpand(event: any) {
    event.preventDefault()
    setExpanded(!expanded)
  }

  return (
    <InputContainer as="form" expanded={expanded}>
      <InputBase
        placeholder="Pesquisar"
        inputProps={{ 'aria-label': 'pesquisar' }}
        sx={{ ml: 1, flex: 1 }}
      />

      <IconButton type="submit" aria-label="pesquisar" sx={{ p: '5px' }} onClick={handleExpand}>
        <SearchIcon />
      </IconButton>
    </InputContainer>
  )
}
