import { lazy } from 'react'
import './App.css'
import './home.css'
import { Routes, Route } from 'react-router-dom';

const SignIn = lazy(() => import('./pages/signin.jsx'))
const SignUp = lazy(() => import('./pages/signup.jsx'))
const Beranda = lazy(() => import('./pages/homepage.jsx'))

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
