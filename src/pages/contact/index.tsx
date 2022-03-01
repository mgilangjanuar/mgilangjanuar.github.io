import { SendOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Form, Input, Layout, Row, Typography } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { FC } from 'react'

const Contact: FC = () => {

  const [form] = useForm()

  const finish = async () => {}

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>
        <Typography.Title level={2}>Contact</Typography.Title>
        <Typography.Paragraph type="secondary">
          If you want to discuss something, request as a speaker, mentorship, collaboration, etc. Please don't hesitate to contact me.
        </Typography.Paragraph>
        <Divider />

        <Form form={form} onFinish={finish} labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} autoComplete="off">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input size="large" placeholder="Please input your name..." />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input size="large" type="email" placeholder="Please input your email..." />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true }]}>
            <Input.TextArea size="large" placeholder="Write your message here..." />
          </Form.Item>
          <br />
          <Form.Item wrapperCol={{ sm: { offset: 5, span: 19 } }}>
            <Button size="large" htmlType="submit" icon={<SendOutlined />}>Send</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </Layout.Content>
}

export default Contact