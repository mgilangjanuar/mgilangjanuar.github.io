import { Typography } from 'antd'
import { FC } from 'react'
import Section from './Section'

export const Certifications: FC = () => {
  return <Section title="Certifications">
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
  </Section>
}

export default Certifications