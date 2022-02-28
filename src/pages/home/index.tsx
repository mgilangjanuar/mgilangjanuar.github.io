import { Col, Layout, Row } from 'antd'
import { FC } from 'react'
import Awards from './components/Awards'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'

const Home: FC = () => {

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>
        <Header />
        <Experience />
        <Education />
        <Certifications />
        <Awards />
      </Col>
    </Row>
  </Layout.Content>
}

export default Home