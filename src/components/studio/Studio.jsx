import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase"

const Studio = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    const handleLogout = async () => {
        try {
          await logout();
          navigate("/login");
        } catch(error) {
          console.log(error)
        }
      }

    const [header, setHeader] = useState("")
    const [html, setHtml] = useState("")
    const [author, setAuthor] = useState("")
    const handleSubmit = async () => {
        await database.article.add({ 
            title: header,
            content: html,
            author: author
         })
         console.log(header, html, author)
    }

  return (
    <div>
        <button onClick={handleLogout}>Log Out</button>
        <h1>WELCOME TO STUDIO</h1>
        <p>*** Paste or type html code in content of article.</p>
        <div>
            <label>Title of article: </label>
            <input type="text" value={header} onChange={(event) => setHeader(event.target.value)} required></input>
        </div>
        <div>
            <label>Content of article: </label>
            <textarea value={html} onChange={(event) => setHtml(event.target.value)} required></textarea>
        </div>
        <div>
            <label>Author of article: </label>
            <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Studio