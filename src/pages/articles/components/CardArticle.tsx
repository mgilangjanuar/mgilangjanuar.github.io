import { CalendarOutlined } from '@ant-design/icons'
import { Card, Tag, Typography } from 'antd'
import moment from 'moment'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import truncateWords from 'truncate-words'
import Markdown from '../../article/components/Markdown'

interface Content {
  link: string,
  content: string,
  metadata: {
    title: string,
    published_at: string,
    tags?: string[],
    cover?: string
  }
}

interface Props {
  page: Content
}

const CardArticle: FC<Props> = ({ page }) => {
  const navigate = useNavigate()

  return <Card hoverable onClick={() => navigate(`/articles${page.link}`)} style={{ marginBottom: '32px' }} cover={page.metadata.cover ? <img src={page.metadata.cover} /> : undefined}>
    <Card.Meta title={page.metadata.title} description={
      <Typography.Paragraph type="secondary"><CalendarOutlined /> {moment(page.metadata.published_at).local().format('llll')}</Typography.Paragraph>
    } />

    {page.metadata.tags?.length && <Typography.Paragraph>
      {page.metadata.tags?.map(tag => <Tag key={tag} color="blue">{tag}</Tag>)}
    </Typography.Paragraph>}

    <Markdown content={truncateWords(page.content, 40)} />
  </Card>
}

export default CardArticle