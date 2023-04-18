import axios from 'axios'
import { getItem, setItem } from '../utils/storage'

const URL = 'http://localhost:8000'

type UserData = {
  id: number
  name: string
  email: string
  password: string
}

type MovieData = {
  movie_id: string
  poster_path: string
  title: string
  vote_average: number
}

async function registerUser(user: UserData): Promise<UserData> {
  const response = await axios.post(`${URL}/register`, user)
  return response.data
}

async function loginUser(user: UserData): Promise<UserData> {
  const response = await axios.post(`${URL}/login`, user)

  const { token } = response.data
  setItem('token', token)

  return response.data
}

async function getUser(): Promise<UserData> {
  const response = await axios.get(`${URL}/user`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function updateUser(user: UserData): Promise<UserData> {
  const response = await axios.put<UserData>(
    `${URL}/user`,
    { name: user.name, email: user.email, password: user.password },
    {
      headers: {
        Authorization: `Bearer ${getItem('token')}`
      }
    }
  )

  return response.data
}

async function listMovies() {
  const response = await axios.get(`${URL}/movies`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function getMovie(movieId: string): Promise<unknown> {
  const response = await axios.get(`${URL}/movies/${movieId}`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function highlightMovie() {
  const response = await axios.get(`${URL}/highlight`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function findMovie(movieName: string): Promise<unknown> {
  const response = await axios.get(`${URL}/find-movie?movieName=${movieName}`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function addFavorites(movie: MovieData): Promise<MovieData> {
  const response = await axios.post(`${URL}/favorites`, movie, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function listFavorites(): Promise<MovieData[]> {
  const response = await axios.get(`${URL}/favorites`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

async function deleteFavorite(movieId: string): Promise<MovieData> {
  const response = await axios.delete(`${URL}/favorites/${movieId}`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

export const api = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  listMovies,
  getMovie,
  highlightMovie,
  findMovie,
  addFavorites,
  listFavorites,
  deleteFavorite
}
