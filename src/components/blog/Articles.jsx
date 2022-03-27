import React from 'react'
import { useArticle } from "../../contexts/ArticleContext";
import { Link } from "react-router-dom"

const Articles = () => {
  const { ArticleState: { allArticles } } = useArticle()
  console.log(allArticles)

  return (
    <>
    <div>ALL Articles are displayed here</div>
    {allArticles.map((article, index) => (
      <div
        key={article.id}
      > 
      <Link to={"/article/" + article.id}>
        <div>{(index+1)+". "}Title: {article.title}</div>
        <div>Author: {article.author}</div>
        Go to
      </Link>
      </div>
    ))}
    </>
  )
}

export default Articles