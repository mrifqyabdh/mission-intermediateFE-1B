import {  } from 'react'
import './App.css'
import './home.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { SignIn , SignUp } from './pages/index.jsx';
import { Beranda } from './pages/homepage.jsx';

function App() {
  return (
  <BrowserRouter>
  <>
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Beranda" element={<Beranda />} />
  </Routes>
  </>
  </BrowserRouter>
  )
}

export default App
