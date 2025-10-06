import {  } from 'react'
import './App.css'
import './home.css'
import { Routes, Route } from 'react-router-dom';
import { SignIn , SignUp } from './pages/index.jsx';
import { Beranda } from './pages/homepage.jsx';

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Beranda" element={<Beranda />} />
  </Routes>
    </>
  )
}

export default App
