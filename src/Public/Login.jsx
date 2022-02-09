import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import gif from '../Media/giphy.gif'
import AuthContext from '../Context/AuthContext';

const Login = () => {

  const {handleAuth} = useContext(AuthContext)

  const handleLogin = () => {
    handleAuth(true)
  }

  return (
    <div className='display flex justify-center items-center h-screen'>
        <div className='display flex flex-col items-center'>
            <div>
                <img src={gif} alt="login" />
            </div>
        
            <Link to="/films">
              <button className='border-2 border-black border-solid rounded-2xl px-5 py-1 bg-blue-300 hover:bg-blue-500' onClick={handleLogin}>Login</button>
            </Link>
        </div>
    </div>
  );
};

export default Login;
