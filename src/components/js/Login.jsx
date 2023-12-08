import React from 'react';
import "../css/login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='Login'>
      <div className="Logincont">
        <h2>Techchefz</h2>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password' />
        <Link to="/dashboard"><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Login