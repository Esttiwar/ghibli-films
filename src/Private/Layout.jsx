import React, { useContext } from 'react';
import {Outlet} from 'react-router-dom'
import AuthContext from '../Context/AuthContext';

const Layout = () => {
    const {handleAuth} = useContext(AuthContext)

    const handleLogin = () => {
    handleAuth(false)
    }


    return (
        <main>
            <nav className='display flex justify-between px-10 py-6'>
                <h1>Ghibli Films</h1>
                <button onClick={handleLogin}>Logout</button>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    );
};

export default Layout;
