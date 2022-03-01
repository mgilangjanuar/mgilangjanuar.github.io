import { Col, Row, Typography } from 'antd'
import React, { FC } from 'react'

interface Props {
  title: string | React.ReactElement,
  noMargin?: boolean
}

export const Section: FC<Props> = ({ title, noMargin, children }) => {
  return <Row gutter={32} style={{ marginBottom: noMargin ? 0 : '84px' }}>
    <Col md={8} sm={10} xs={24} style={{ textAlign: 'left', marginBottom: noMargin ? 0 : '24px' }}>
      <Typography.Title level={4}>{title}</Typography.Title>
    </Col>
    <Col md={16} sm={14} xs={24}>
      {children}
    </Col>
  </Row>
}

export default Section