import React from 'react';
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
  // Fake database
  const usersdata = [
    {
      id: 1, 
      username: "kenneth",
      password: "Kenneth123",
      role: "owner"
    },

    {
      id: 1, 
      username: "karl",
      password: "karl12345",
      role: "tenant"
    }
  ];

  // Variables
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Reads saved user from browser storage every refresh
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser(savedUser);
    }

    setLoading(false);
  }, []); 

  // Login Function, this login() will return a boolean true or false
  const login = (username, password) => {

    const foundUser = usersdata.find((user) => 
      user.username === username &&
      user.password === password
    )
    
    console.log("AuthProvider, founduser: ", username, password, foundUser);

    // If foundUser has value then true else false
    if (foundUser) {
      setUser(foundUser);
      //store the user to local storage of browser so that when refresh you are still log in
      localStorage.setItem("user", JSON.stringify(foundUser)); //the "user" is the identifier
      return true;
    }

    return false;
  };

  // Logout Function
  const logout = () => {
    setLoading(true);

    setUser(null);
    localStorage.removeItem("user");
    
    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{user, loading, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;