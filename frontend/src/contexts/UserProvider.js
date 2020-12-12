import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider(props) {
  const [loggedIn, setLoggedIn] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const logOut = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        logOut,
        email,
        password,
        passwordConfirm,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
