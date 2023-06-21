import { FC } from 'react'
import { useParams } from 'react-router-dom'

const Detail: FC = () => {
  const params = useParams()

  return <>Details for id: {params.id}</>
}

export default Detail
