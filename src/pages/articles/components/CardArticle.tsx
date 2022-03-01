import { Card } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import truncateWords from 'truncate-words'
import { Content } from '../../article/components/ContentType'
import DateText from '../../article/components/DateText'
import Markdown from '../../article/components/Markdown'
import Tags from '../../article/components/Tags'

interface Props {
  page: Content
}

const CardArticle: FC<Props> = ({ page }) => {
  const navigate = useNavigate()

  return <Card bordered={false} size="small" hoverable onClick={() => navigate(`/articles${page.link}`)} style={{ marginBottom: '32px' }} cover={page.metadata.cover ? <img src={page.metadata.cover} /> : undefined}>
    <Card.Meta title={page.metadata.title} description={<DateText date={page.metadata.published_at} /> } />

    {page.metadata.tags?.length && <Tags tags={page.metadata.tags} />}

    <Markdown content={truncateWords(page.content, 20)} />
  </Card>
}

export default CardArticle