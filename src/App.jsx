import { lazy, useEffect } from 'react'
import './App.css'
import './home.css'

import { Routes, Route, useLocation } from 'react-router-dom';
import useTypeStore from './pages/Store/setTypeStore.js';

const SignIn = lazy(() => import('./pages/signin.jsx'))
const SignUp = lazy(() => import('./pages/signup.jsx'))
const Beranda = lazy(() => import('./pages/homepage.jsx'))
const DaftarSaya = lazy(() => import('./pages/daftarSaya.jsx'))

const Wrapper = lazy(() => import('./WrapPage.jsx'))


function App() {
  const resetTypeForm = useTypeStore((state) => state.setTypePassword)
  const location = useLocation();
  
  useEffect(() => {
    resetTypeForm()
  }, [location.pathname])

  return (
    <>
  <Routes>

    <Route path="/" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />

    <Route element={<Wrapper />}>
    <Route path="/Beranda" element={<Beranda />} />
    <Route path="/Daftar-Saya" element={<DaftarSaya />} />
    </Route>

  </Routes>
    </>
  )
}

export default App
