import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../context/user'
import userContextProvider from '../context/userContextProvider'

function login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const {setUser} = useContext(userContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        value={userName}
        onChange={(e)=>{
            setUserName(e.target.value)
        }}
        type="text" 
        placeholder='Enter Your Username' />

        <input 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        type="text" 
        placeholder='Enter Your Password' />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login
