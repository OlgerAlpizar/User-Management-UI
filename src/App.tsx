import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Container, Row, Col } from 'react-bootstrap'
import cx from 'classnames'
import Detail from './components/detail/Detail'
import Home from './components/home/Home'

const App: FC = () => {         
  return (
    <Container className={cx('justify-content-center')}>
      <Row className={cx('justify-content-center')}>
        <Col>
        <Routes>
    <Route
      index
      element={<Home />}
    />
    <Route
      path="detail/:id"
      element={<Detail />}
    />
  </Routes>

          <ToastContainer
            autoClose={5000}
            position={toast.POSITION.BOTTOM_RIGHT}
            pauseOnFocusLoss={false}
            newestOnTop={true}
            limit={5}
          />
        </Col>
      </Row>
    </Container>
  )
}
export default App
