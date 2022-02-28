import { GithubFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Layout, Row, Space, Typography } from 'antd'
import { FC } from 'react'

const Home: FC = () => {

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>
        <Row gutter={32}>
          <Col md={8} sm={10} xs={24} style={{ textAlign: 'left', marginBottom: '40px' }}>
            <img src="/assets/images/avatar.png" alt="avatar" style={{ width: '100%', maxWidth: '240px' }} />
          </Col>
          <Col md={16} sm={14} xs={24}>
            <Typography.Title level={2}>
              <img src="/assets/images/signature.png" style={{ width: '100%', maxWidth: '370px' }} />
            </Typography.Title>
            <Typography.Paragraph>
              <Space>
                <Button size="large" type="link" icon={<GithubFilled style={{ fontSize: '1.6rem' }} />} href="https://github.com/mgilangjanuar" target="_blank" />
                <Button size="large" type="link" icon={<LinkedinFilled style={{ fontSize: '1.6rem' }} />} href="https://linkedin.com/in/mgilangjanuar" target="_blank" />
                <Button size="large" type="link" icon={<TwitterOutlined style={{ fontSize: '1.6rem' }} />} href="https://twitter.com/mgilangjanuar" target="_blank" />
              </Space>
            </Typography.Paragraph>
            <Typography.Paragraph>
              A software architecture development enthusiast and glad to create innovative products that can help others like <a target="_blank" href="https://github.com/mgilangjanuar/teledrive">TeleDrive</a>, <a target="_blank" href="https://restfire.vercel.app">RestFire</a>, <a target="_blank" href="https://repair-json.vercel.app">Repair JSON</a>, <a target="_blank" href="https://pro-gamer.vercel.app/">&lt; Progamer! /&gt;</a>, etc. Create many online courses on <a target="_blank" href="https://www.udemy.com/user/m-gilang-januar/">Udemy</a> with Bahasa Indonesia. Also active in several open source projects.
            </Typography.Paragraph>
          </Col>
        </Row>
        <Divider />
        <Row gutter={32} style={{ marginTop: '84px', marginBottom: '84px' }}>
          <Col md={8} sm={10} xs={24} style={{ textAlign: 'left', marginBottom: '24px' }}>
            <Typography.Title level={4}>Experience</Typography.Title>
          </Col>
          <Col md={16} sm={14} xs={24}>
            <Typography.Paragraph>
              <img src="/assets/images/5feefbc08ef40333bbd2f92e_bahasa-ai-logo-blue (2021)@4x-p-500.png" alt="bahasa-ai" style={{ height: '100%', maxHeight: '27px' }} />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>VP of Engineering</Typography.Text> (Oct 2019 - Present)
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Software Engineer</Typography.Text> (Feb 2019 - Sep 2019)
            </Typography.Paragraph>
            <br />
            <Typography.Paragraph>
              <img src="/assets/images/Logo_Kompas_Gramedia.png" alt="kompas-gramedia" style={{ height: '100%', maxHeight: '46px' }} />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Back-end Engineer</Typography.Text> (Sep 2018 - Jan 2019)
            </Typography.Paragraph>
            <br />
            <Typography.Paragraph>
              <img src="/assets/images/new-cermati-logo-white.png" alt="cermati-com" style={{ height: '100%', maxHeight: '50px' }} />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Software Engineer Internship</Typography.Text> (Sep 2018 - Jan 2019)
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row gutter={32} style={{ marginBottom: '84px' }}>
          <Col md={8} sm={10} xs={24} style={{ textAlign: 'left', marginBottom: '24px' }}>
            <Typography.Title level={4}>Education</Typography.Title>
          </Col>
          <Col md={16} sm={14} xs={24}>
            <Typography.Paragraph>
              <img src="/assets/images/ui.png" alt="ui" style={{ height: '100%', maxHeight: '52px' }} />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Bachelor’s Degree, Computer Science</Typography.Text> (2014 - 2018)
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row gutter={32} style={{ marginBottom: '84px' }}>
          <Col md={8} sm={10} xs={24} style={{ textAlign: 'left', marginBottom: '24px' }}>
            <Typography.Title level={4}>Certifications</Typography.Title>
          </Col>
          <Col md={16} sm={14} xs={24}>
            <Typography.Paragraph>
              <img src="/assets/images/hackerrank_logo.png" alt="hackerrank" style={{ height: '100%', maxHeight: '20px' }} />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Rest API (Intermediate)</Typography.Text> &mdash; <a target="_blank" href="https://www.hackerrank.com/certificates/5718D0BD583E">5718D0BD583E</a>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Problem Solving (Basic)</Typography.Text> &mdash; <a target="_blank" href="https://www.hackerrank.com/certificates/BBD490EBAD8A">BBD490EBAD8A</a>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>JavaScript (Basic)</Typography.Text> &mdash; <a target="_blank" href="https://www.hackerrank.com/certificates/a16f4e9af166">A16F4E9AF166</a>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Python (Basic)</Typography.Text> &mdash; <a target="_blank" href="https://www.hackerrank.com/certificates/AB67A764F54F">AB67A764F54F</a>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>React (Basic)</Typography.Text> &mdash; <a target="_blank" href="https://www.hackerrank.com/certificates/BECAA4D3F896">BECAA4D3F896</a>
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col md={8} sm={10} xs={24} style={{ textAlign: 'left', marginBottom: '24px' }}>
            <Typography.Title level={4}>Awards</Typography.Title>
          </Col>
          <Col md={16} sm={14} xs={24}>
            <Typography.Paragraph>
              <img src="/assets/images/supabase.png" alt="supabase" style={{ height: '100%', maxHeight: '33px' }} />
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text strong>Most Fun/Interesting Runner Up</Typography.Text>, Open Source Hackathon &mdash; <a target="_blank" href="https://supabase.com/blog/2021/08/09/hackathon-winners#runner-up-3">Aug 2021</a>
            </Typography.Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  </Layout.Content>
}

export default Home