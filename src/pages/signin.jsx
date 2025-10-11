import { useEffect } from 'react'
import {Header} from './components/index-components/header.jsx'
import {Form} from './components/index-components/Forms.jsx'
import {Links} from './components/index-components/Links.jsx'
import {Buttons} from './components/index-components/Buttons.jsx'
import { useLocation } from "react-router-dom";
import useTypeStore from './Store/setTypeStore.js'

const SignIn = () => {
  const setType = useTypeStore((state) => state.typeStore)
  
  return (
    <>
  <div className="body-signin">
  <main className="container">
    <Header />
    <form className="form-input">
      <Form label="Username" type="text"/>  
      <Form label="Kata Sandi" type={setType} showImg LogoclassName="eye-password" />  
    </form>
    <Links text="Belum punya akun?" link="Daftar" navigate="/SignUp" showForgot />
    <Buttons text="Masuk" />
  </main>
  </div>
    </>
  )
}

export default SignIn
