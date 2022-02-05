import React, { useContext } from 'react';
import gif from '../Gif/giphy.gif'
import AuthContext from '../Context/AuthContext';

const Login = () => {

  const {handleAuth} = useContext(AuthContext)

  const handleLogin = () => {
    handleAuth(true)
  }

  return (
    <div>
        <div>
            <div>
                <img src={gif} alt="login" />
            </div>
        
            <button onClick={handleLogin} type="submit">Login</button>
        </div>
    </div>
  );
};

export default Login;
