import React, { useContext } from 'react';
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
        
            <button className='border-2 border-black border-solid rounded-2xl px-5 py-1 bg-blue-300 hover:bg-blue-500' onClick={handleLogin} type="submit">Login</button>
        </div>
    </div>
  );
};

export default Login;
