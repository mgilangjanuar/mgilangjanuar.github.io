import { MenuOutlined } from '@ant-design/icons'
import { Divider, Layout, Menu, Typography } from 'antd'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Articles from './pages/articles'
import Contact from './pages/contact'
import Home from './pages/home/index'

function App() {
  const navigate = useNavigate()
  return (
    <Layout className="App">
      <Layout.Header style={{ background: '#ffffff', padding: '0 20px' }}>
        <Menu overflowedIndicator={<MenuOutlined />} mode="horizontal" triggerSubMenuAction="click" theme="light" defaultSelectedKeys={['home']}
          style={{ background: '#ffffff', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <Menu.Item onClick={() => navigate('/')} key="home">Home</Menu.Item>
          <Menu.Item onClick={() => navigate('/contact')} key="contact">Contact</Menu.Item>
          <Menu.Item onClick={() => navigate('/articles')} key="articles">Articles</Menu.Item>
        </Menu>
      </Layout.Header>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="articles" element={<Articles />} />
        </Route>
      </Routes>
      <Layout.Footer>
        <Divider />
        <Typography.Paragraph style={{ textAlign: 'center' }}>
          <img src="/assets/images/signature.png" style={{ height: '100%', maxHeight: '60px' }} /> &copy; {new Date().getFullYear()}
        </Typography.Paragraph>
      </Layout.Footer>
    </Layout>
  )
}

export default App
