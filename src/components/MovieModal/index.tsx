import { useQuery } from 'react-query'
import { ContainerModal } from '../../styles/styles'
import { api } from '../../services/api'

type MovieModalProps = {
  idMovie: number
  close: () => void
}

export default function MovieModal({ idMovie, close }: MovieModalProps) {
  const { data } = useQuery('movies-data', () => api.getMovie(idMovie))
  console.log(idMovie)

  return (
    <ContainerModal maxWidth={false} disableGutters>
      <h1>Movie Modal</h1>
      <button onClick={close}>X</button>
    </ContainerModal>
  )
}
