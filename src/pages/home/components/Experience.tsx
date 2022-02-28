import { Typography } from 'antd'
import { FC } from 'react'
import Section from './Section'

export const Experience: FC = () => {
  return <Section title="Experience">
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
  </Section>
}

export default Experience