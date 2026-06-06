import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
  const isLogin = null;
  const usertype = "owner"; 

  return (
    <AuthContext.Provider value={{isLogin, usertype}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;