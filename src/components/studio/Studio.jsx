import React from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
        <h1>Studio</h1>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Studio