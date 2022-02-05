import './App.css';
import Unauth from './Public/Unauth';
import Auth from './Private/Auth';
import { useContext } from 'react';
import AuthContext from './Context/AuthContext';

function App() {

  const {auth} = useContext(AuthContext)

  return (
    <div>
      {auth ? <Auth/> : <Unauth/> }
    </div>
  );
}

export default App;
