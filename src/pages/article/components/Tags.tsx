import { Tag, Typography } from 'antd'
import { FC } from 'react'

interface Props {
  tags: string[]
}

const Tags: FC<Props> = ({ tags }) => {
  return <Typography.Paragraph>
    {tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </Typography.Paragraph>
}

export default Tags