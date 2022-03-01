import { CalendarOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import moment from 'moment'
import { FC } from 'react'

interface Props {
  date: string
}

const DateText: FC<Props> = ({ date }) => {
  return <Typography.Paragraph type="secondary">
    <CalendarOutlined /> {moment(date).local().format('ll')}
  </Typography.Paragraph>
}

export default DateText