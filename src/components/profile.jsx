import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../context/user'

function profile() {
  const {user} = useContext(userContext);

  if(!user) return <div>Please Login</div>

  return <div>Welcome {user.userName}</div>
}

export default profile
