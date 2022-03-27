const ArticleReducer = (state, action) => {
    const {type, payload} = action
    console.log(3221434,payload)
    switch (type){
        case 'SET_ALL_ARTICLES':
            return { 
                ...state,
                allArticles: payload.allArticles,
            }
        case 'GET_ARTICLE':
            return { 
                ...state,
                article: payload.article,
            }
        default: return state
    }
}
export default ArticleReducer