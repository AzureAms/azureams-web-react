import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useArticle } from '../../contexts/ArticleContext'
import Markdown from 'markdown-to-jsx';

const Article = () => {
    const { articleId } = useParams()
    const { ArticleState: {article}, getArticle } = useArticle()
    useEffect(() => {
        getArticle(articleId)
    }, [])
    

  return (
      <>
    <div>Article</div>
    {article !== null && article !== undefined && (
        <div key = {article.id}>
            <div>Title: {article.title}</div>
            <div>Author: {article.author}</div>
            <div>
                <Markdown>{article.content}</Markdown>
            </div>
        </div>)}
    </>
  )
}

export default Article