import { Col, Layout, Pagination, Row, Spin, Typography } from 'antd'
import axios from 'axios'
import parseMD from 'parse-md'
import { FC, useEffect, useState } from 'react'
import { PER_PAGE, RAW_URL } from '../../utils/Constant'
import { Content } from '../article/components/ContentType'
import CardArticle from './components/CardArticle'
import Header from './components/Header'

const Articles: FC = () => {
  const [links, setLinks] = useState<string[]>()
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<Content[]>([])

  useEffect(() => {
    async function fetchArticles() {
      const { data } = await axios.get(`${RAW_URL}/contents/index.md`)
      const { metadata } = parseMD(data)
      setLinks((metadata as { articles: string[] }).articles)
    }
    fetchArticles()
  }, [])

  useEffect(() => {
    fetch()
  }, [links, page])

  const fetch = async () => {
    if (links?.length) {
      setPages([])
      const posts: any[] = []
      const [offset, limit] = [(page - 1) * PER_PAGE, (page - 1) * PER_PAGE + PER_PAGE]
      for (const link of links.slice(offset, limit)) {
        const { data } = await axios.get(`${RAW_URL}/contents${link}`)
        posts.push({
          link: link.replace(/\.md$/gi, ''),
          ...parseMD(data)
        })
      }
      setPages(posts)
    }
  }

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>
        <Header /><br />

        {!pages?.length && <Typography.Paragraph style={{ textAlign: 'center' }}><Spin /></Typography.Paragraph>}
        {pages?.map(page => <CardArticle key={page.link} page={page} />)}

        <Typography.Paragraph style={{ textAlign: 'right' }}>
          <Pagination
            // showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            total={links?.length}
            defaultCurrent={page}
            current={page}
            defaultPageSize={PER_PAGE}
            pageSize={PER_PAGE}
            onChange={page => setPage(page)} />
        </Typography.Paragraph>
      </Col>
    </Row>
  </Layout.Content>
}

export default Articles