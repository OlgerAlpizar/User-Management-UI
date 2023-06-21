import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  const id = 'ProductIdExample' 

  return (
    <>
    Welcome to home
    <Link to={`detail/${id}`} >Go to details</Link>
    </>
  )
}

export default Home
