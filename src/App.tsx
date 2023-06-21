import { Col, Container, Row } from 'react-bootstrap'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Detail from './components/detail/Detail'
import Home from './components/home/Home'
import cx from 'classnames'

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
