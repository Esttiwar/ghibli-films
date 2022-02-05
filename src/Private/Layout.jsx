import React from 'react';
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
        <main>
            <nav className='display flex justify-between'>
                <h1>Ghibli Films</h1>
                <button>Logout</button>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
  );
};

export default Layout;
