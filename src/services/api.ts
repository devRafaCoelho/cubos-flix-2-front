import axios from 'axios'
import { getItem, setItem } from '../utils/storage'

const URL = 'http://localhost:8000'

type UserData = {
  id: number
  name: string
  email: string
  // password: string
  // newPassword?: string
  // confirmNewPassword?: string
}

async function registerUser(user: UserData): Promise<UserData> {
  const response = await axios.post(`${URL}/register`, user)
  return response.data
}

export const api = {
  registerUser
  // loginUser,
  // getUser,
  // updateUser,
  // getComments,
  // registerComment,
  // updateComment,
  // deleteComment
}
