import React from 'react'
import {useNavigate} from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()
    const handlelogin =()=> {
        navigate('/home')
    }
  return (
    <div>
        <input placeholder='email' />
        <input placeholder='password' />
        <button onClick={handlelogin}> log in</button>
    </div>
  )
}

export default LogIn