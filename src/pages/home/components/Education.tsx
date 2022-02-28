import { Typography } from 'antd'
import { FC } from 'react'
import Section from './Section'

export const Education: FC = () => {
  return <Section title="Education">
    <Typography.Paragraph>
      <img src="/assets/images/ui.png" alt="ui" style={{ height: '100%', maxHeight: '52px' }} />
    </Typography.Paragraph>
    <Typography.Paragraph>
      <Typography.Text strong>Bachelor’s Degree, Computer Science</Typography.Text> (2014 - 2018)
    </Typography.Paragraph>
  </Section>
}

export default Education