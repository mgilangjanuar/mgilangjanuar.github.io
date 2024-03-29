import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Layout, Row, Spin, Typography } from 'antd'
import axios from 'axios'
import parseMD from 'parse-md'
import { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { RAW_URL } from '../../utils/Constant'
import Header from '../home/components/Header'
import { Content } from './components/ContentType'
import DateText from './components/DateText'
import Markdown from './components/Markdown'
import Tags from './components/Tags'

const Article: FC = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [page, setPage] = useState<Content>()

  useEffect(() => {
    async function fetchArticle() {
      let data: any
      try {
        const { data: resp } = await axios.get(`${RAW_URL}/contents/${params.id}.md`)
        data = resp
      } catch (error) {
        const { data: resp } = await axios.get(`${RAW_URL}/contents/${params.id}/index.md`)
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
        {page?.metadata.published_at && <DateText date={page.metadata.published_at as string} />}

        {page?.metadata.tags?.length && <Tags tags={page?.metadata.tags} />}

        {page?.content && <Markdown content={page.content} /> }

        <Typography.Paragraph style={{ textAlign: 'right', marginTop: '42px' }}>
          <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>Back</Button>
        </Typography.Paragraph>

        <Divider style={{ marginTop: '84px', marginBottom: '40px' }} orientation="left" plain>Written by</Divider>
        <Header noMargin />
      </Col>
    </Row>
  </Layout.Content>
}

export default Article