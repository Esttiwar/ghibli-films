import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom'
import AuthContext from '../Context/AuthContext';
import './Layout.css'

const Layout = () => {
    const {handleAuth} = useContext(AuthContext)

    const handleLogin = () => {
    handleAuth(false)
    }


    return (
        <main className=''>
            <nav className='display flex justify-between px-10 py-6'>
                <h1 className='ghibli-title font-black text-5xl text-white px-5 py-2'>Ghibli Films</h1>
                <button className='button-font font-black border-2 border-black border-solid rounded-2xl my-3 px-5 bg-blue-300 hover:bg-blue-500' onClick={handleLogin}>Logout</button>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    );
};

export default Layout;
