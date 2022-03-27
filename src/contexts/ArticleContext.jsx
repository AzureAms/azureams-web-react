import React, { useReducer, useEffect, useContext } from "react";
import { database } from "../firebase";
import ArticleReducer from "../reducers/ArticleReducer"

const ArticleContext = React.createContext();

export function useArticle() {
  return useContext(ArticleContext);
}

export function ArticleProvider({ children }) {
  const [ArticleState, dispatch] = useReducer(ArticleReducer, {
    allArticles: [],
    article: null
  });

  useEffect(() => {
    return database.article.onSnapshot((snapshot) => {
      dispatch({
        type: "SET_ALL_ARTICLES",
        payload: { allArticles: snapshot.docs.map(database.formatDoc) },
      });
    });
  }, []);

  const getArticle = async (articleId) => {
      console.log('getting')
      return database.article.doc(articleId).get().then((snapshot) => {
          console.log(database.formatDoc(snapshot))
          dispatch({ 
              type: "GET_ARTICLE",
              payload: { article: database.formatDoc(snapshot)}
          })
          
      })
  }

  

  const value = { ArticleState, getArticle };

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
}
