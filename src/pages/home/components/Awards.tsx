import { Typography } from 'antd'
import { FC } from 'react'
import Section from './Section'

export const Awards: FC = () => {
  return <Section title="Awards" noMargin>
    <Typography.Paragraph>
      <img src="/assets/images/supabase.png" alt="supabase" style={{ height: '100%', maxHeight: '33px' }} />
    </Typography.Paragraph>
    <Typography.Paragraph>
      <Typography.Text strong>Most Fun/Interesting Runner Up</Typography.Text>, Open Source Hackathon &mdash; <a target="_blank" href="https://supabase.com/blog/2021/08/09/hackathon-winners#runner-up-3">Aug 2021</a>
    </Typography.Paragraph>
  </Section>
}

export default Awards