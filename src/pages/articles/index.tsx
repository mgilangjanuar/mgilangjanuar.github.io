import { CalendarOutlined } from '@ant-design/icons'
import { Card, Col, Divider, Layout, Row, Spin, Tag, Typography } from 'antd'
import axios from 'axios'
import moment from 'moment'
import parseMD from 'parse-md'
import { FC, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router'
import remarkGfm from 'remark-gfm'
import truncateWords from 'truncate-words'

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

const Articles: FC = () => {
  const navigate = useNavigate()
  const [pages, setPages] = useState<Content[]>([])

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await axios.get('/contents/index.md')
      const { metadata } = parseMD(data)
      const posts: any[] = []
      for (const link of (metadata as { articles: string[] }).articles) {
        const { data } = await axios.get(`/contents${link}`)
        posts.push({
          link: link.replace(/\.md$/gi, ''),
          ...parseMD(data)
        })
      }
      setPages(posts)
    }
    fetchArticles()
  }, [])

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>
        <Typography.Title level={2}>Articles</Typography.Title>
        <Typography.Paragraph type="secondary">
          I’ll share my new (and current) knowledge 💡, what I learn from something (or someone) 🕵️‍♂️, my new products (and ideas) 🏍, tips (and dark arts) in technology 💀, or anything else here.
        </Typography.Paragraph>
        <Divider />
        <br />

        {!pages?.length && <Typography.Paragraph style={{ textAlign: 'center' }}><Spin /></Typography.Paragraph>}
        {pages?.map(page => <Card hoverable bordered={false} onClick={() => navigate(`/articles${page.link}`)} style={{ marginBottom: '40px' }} cover={page.metadata.cover ? <img src={page.metadata.cover} /> : undefined}>
          <Card.Meta title={page.metadata.title} description={
            <Typography.Paragraph type="secondary"><CalendarOutlined /> {moment(page.metadata.published_at).local().format('llll')}</Typography.Paragraph>
          } />

          {page.metadata.tags?.length && <Typography.Paragraph>
            {page.metadata.tags?.map(tag => <Tag key={tag} color="blue">{tag}</Tag>)}
          </Typography.Paragraph>}

          <ReactMarkdown className="article" remarkPlugins={[remarkGfm]}>
            {truncateWords(page.content, 40)}
          </ReactMarkdown>
        </Card>)}
      </Col>
    </Row>
  </Layout.Content>
}

export default Articles