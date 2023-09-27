import {useEffect} from 'react';
import { useCurrentUser } from "./CurrentUserContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register&Login/Register';
import Login from './components/Register&Login/Login';
import Header from './components/Header';
import Home from './components/Home';
import Meteo from './components/Meteo';
function App() {
  const userContext: any = useCurrentUser();
  useEffect(()=>{
    userContext.fetchCurrentUser();
  },[])
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meteo" element={<Meteo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;