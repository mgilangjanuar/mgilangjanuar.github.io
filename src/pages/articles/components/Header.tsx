import { Typography } from 'antd'
import { FC } from 'react'

const Header: FC = () => {
  return <>
    <Typography.Title level={2}>Articles</Typography.Title>
    <Typography.Paragraph type="secondary">
      I’ll share my new (and current) knowledge 💡, what I learn from something (or someone) 🕵️‍♂️, my new products (and ideas) 🏍, tips (and dark arts) in technology 💀, or anything else here.
    </Typography.Paragraph>
  </>
}

export default Header