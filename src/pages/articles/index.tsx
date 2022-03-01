import { Col, Layout, Row, Spin, Typography } from 'antd'
import axios from 'axios'
import parseMD from 'parse-md'
import { FC, useEffect, useState } from 'react'
import CardArticle from './components/CardArticle'
import Header from './components/Header'

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
        <Header /><br />

        {!pages?.length && <Typography.Paragraph style={{ textAlign: 'center' }}><Spin /></Typography.Paragraph>}
        {pages?.map(page => <CardArticle page={page} />)}
      </Col>
    </Row>
  </Layout.Content>
}

export default Articles