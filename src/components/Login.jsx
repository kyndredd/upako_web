import React from 'react';
import { useState, useContext } from 'react';
import "./styles_components/Login.css";
import AuthContext from '../context/AuthContext';
import { Link, NavigationType, useNavigate } from 'react-router-dom';

const Login = () => {
  const {login} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if username and password has value, check if user exist in database
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh when submitting
    const isExist = login(username, password);

    if (username && password) {
      console.log("User: ", username, password, isExist);
      setError("");

      if (isExist) {
        console.log("User Exist", isExist);
        setError("");
        navigate("/");
      } 
      else {
        console.log("User not Found");
        setError("Wrong login credentials");
      }
    } 
    else {
      setError("Please input your username and password");
    }
    
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form_infos'>
          <label>Username</label>
          <input 
            type='text' 
            value={username} 
            placeholder='Username' 
            onChange={(event) => setUsername(event.target.value)}
          />

          <label>Password</label>
          <input
            type='password'
            value={password} 
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />

          {error ? <p>{error}</p> : null}
        
          <div>
            <button type='submit'>Login</button>
            <button type='submit'>Sign Up</button>
          </div>

          <Link>Forget Password?</Link>
        </div>
      </form>
    </div>
    
  );
}

export default Login;