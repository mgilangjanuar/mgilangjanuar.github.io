import { GithubFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons'
import { Button, Space, Typography } from 'antd'
import { FC } from 'react'
import { ReactComponent as Avatar } from './Avatar.svg'
import Section from './Section'

interface Props {
  noMargin?: boolean
}

export const Header: FC<Props> = ({ noMargin }) => {
  return <Section noMargin={noMargin} title={<Avatar style={{ width: '100%', maxWidth: '220px', height: 'auto' }} />}>
    <Typography.Title level={2}>
      <img decoding="async" src="/assets/images/signature.png" style={{ width: '100%', maxWidth: '370px' }} />
    </Typography.Title>
    <Typography.Paragraph>
      <Space>
        <Button size="large" type="link" icon={<GithubFilled style={{ fontSize: '1.6rem' }} />} href="https://github.com/mgilangjanuar" target="_blank" />
        <Button size="large" type="link" icon={<LinkedinFilled style={{ fontSize: '1.6rem' }} />} href="https://linkedin.com/in/mgilangjanuar" target="_blank" />
        <Button size="large" type="link" icon={<TwitterOutlined style={{ fontSize: '1.6rem' }} />} href="https://twitter.com/mgilangjanuar" target="_blank" />
      </Space>
    </Typography.Paragraph>
    <Typography.Paragraph>
      A software architecture development enthusiast and glad to create innovative products that can help others like <a target="_blank" href="https://github.com/mgilangjanuar/teledrive">TeleDrive</a>, <a target="_blank" href="https://restfire.vercel.app">RestFire</a>, <a target="_blank" href="https://repair-json.vercel.app">Repair JSON</a>, <a target="_blank" href="https://pro-gamer.vercel.app/">&lt; Progamer! /&gt;</a>, etc. Made many online courses on <a target="_blank" href="https://www.udemy.com/user/m-gilang-januar/">Udemy</a> with Bahasa Indonesia. Also active in several open source projects.
    </Typography.Paragraph>
  </Section>
}

export default Header