import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

interface Props {
  content: string
}

const Markdown: FC<Props> = ({ content }) => {
  return <ReactMarkdown className="article" remarkPlugins={[remarkGfm]} components={{
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ?
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={dracula}
          language={match[1]}
          PreTag="div"
          {...props}
        /> : <code className={className} {...props}>
          {children}
        </code>
    }
  }}>
    {content}
  </ReactMarkdown>
}

export default Markdown