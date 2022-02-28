import { Col, Layout, Row } from 'antd'
import { FC } from 'react'

const Contact: FC = () => {

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>

      </Col>
    </Row>
  </Layout.Content>
}

export default Contact