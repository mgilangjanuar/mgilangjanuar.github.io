import { SendOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Form, Input, Layout, Row, Typography } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { FC } from 'react'

const Contact: FC = () => {

  const [form] = useForm()

  const finish = async () => {
    const { name, message } = form.getFieldsValue()
    window.open(`mailto:mgilangjanuar@gmail.com?subject=A message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`, '_blank')
  }

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
            <Input placeholder="Please input your name..." />
          </Form.Item>
          <Form.Item name="message" label="Message" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Write your message here..." />
          </Form.Item>
          <Form.Item wrapperCol={{ sm: 24 }} style={{ textAlign: 'right' }}>
            <Button type="ghost" htmlType="submit" icon={<SendOutlined />}>Send</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </Layout.Content>
}

export default Contact