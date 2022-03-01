import { CalendarOutlined } from '@ant-design/icons'
import { Col, Divider, Layout, Row, Spin, Tag, Typography } from 'antd'
import axios from 'axios'
import moment from 'moment'
import parseMD from 'parse-md'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../home/components/Header'
import Markdown from './components/Markdown'

interface Content {
  link: string,
  content: string,
  metadata: {
    title: string,
    published_at: string,
    cover?: string,
    tags?: string[]
  }
}

const Article: FC = () => {
  const params = useParams()

  const [page, setPage] = useState<Content>()

  useEffect(() => {
    async function fetchArticle() {
      let data: any
      try {
        const { data: resp } = await axios.get(`/contents/${params.id}.md`)
        data = resp
      } catch (error) {
        const { data: resp } = await axios.get(`/contents/${params.id}/index.md`)
        data = resp
      }
      setPage({
        link: params.id as string,
        ...parseMD(data)
      } as Content)
    }
    fetchArticle()
  }, [])

  return <Layout.Content style={{ marginTop: '60px' }}>
    <Row className="container">
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 16, offset: 4 }} sm={{ span: 18, offset: 2 }} xs={24}>
        {!page && <Typography.Paragraph style={{ textAlign: 'center' }}><Spin /></Typography.Paragraph>}

        <Typography.Title level={2}>{page?.metadata.title}</Typography.Title>
        <Typography.Paragraph type="secondary"><CalendarOutlined /> {moment(page?.metadata.published_at).local().format('llll')}</Typography.Paragraph>

        {page?.metadata.tags?.length && <Typography.Paragraph>
          {page?.metadata.tags?.map(tag => <Tag key={tag} color="blue">{tag}</Tag>)}
        </Typography.Paragraph>}

        {page?.content && <Markdown content={page.content} /> }

        <Divider style={{ marginTop: '84px', marginBottom: '40px' }} orientation="left" plain>Written by</Divider>
        <Header noMargin />
      </Col>
    </Row>
  </Layout.Content>
}

export default Article