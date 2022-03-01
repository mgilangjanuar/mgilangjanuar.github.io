import { Col, Layout, Row, Spin, Typography } from 'antd'
import axios from 'axios'
import parseMD from 'parse-md'
import { FC, useEffect, useState } from 'react'
import { RAW_URL } from '../../utils/Constant'
import { Content } from '../article/components/ContentType'
import CardArticle from './components/CardArticle'
import Header from './components/Header'

const Articles: FC = () => {
  const [pages, setPages] = useState<Content[]>([])

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await axios.get(`${RAW_URL}/contents/index.md`)
      const { metadata } = parseMD(data)
      const posts: any[] = []
      for (const link of (metadata as { articles: string[] }).articles) {
        const { data } = await axios.get(`${RAW_URL}/contents${link}`)
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
        {pages?.map(page => <CardArticle key={page.link} page={page} />)}
      </Col>
    </Row>
  </Layout.Content>
}

export default Articles