import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface Props {
  type: 'password' | 'text' | 'email'
  name: string
}

export default function DefaultTextField({ type, name }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      name={name}
      type={showPassword ? 'text' : type}
      label={name}
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment:
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
            </InputAdornment>
          ) : null
      }}
    />
  )
}
