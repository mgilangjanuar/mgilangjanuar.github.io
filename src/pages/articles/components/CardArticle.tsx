import { CalendarOutlined } from '@ant-design/icons'
import { Card, Typography } from 'antd'
import moment from 'moment'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import truncateWords from 'truncate-words'
import { Content } from '../../article/components/ContentType'
import Markdown from '../../article/components/Markdown'
import Tags from '../../article/components/Tags'

interface Props {
  page: Content
}

const CardArticle: FC<Props> = ({ page }) => {
  const navigate = useNavigate()

  return <Card hoverable onClick={() => navigate(`/articles${page.link}`)} style={{ marginBottom: '32px' }} cover={page.metadata.cover ? <img src={page.metadata.cover} /> : undefined}>
    <Card.Meta title={page.metadata.title} description={
      <Typography.Paragraph type="secondary"><CalendarOutlined /> {moment(page.metadata.published_at).local().format('llll')}</Typography.Paragraph>
    } />

    {page.metadata.tags?.length && <Tags tags={page.metadata.tags} />}

    <Markdown content={truncateWords(page.content, 40)} />
  </Card>
}

export default CardArticle