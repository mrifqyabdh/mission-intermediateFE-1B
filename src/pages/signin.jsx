import {  } from 'react'
import {Header} from './components/index-components/header.jsx'
import {Form} from './components/index-components/Forms.jsx'
import {Links} from './components/index-components/Links.jsx'
import {Buttons} from './components/index-components/Buttons.jsx'

const SignIn = () => {
  return (
    <>
  <div className="body-signin">
  <main className="container">
    <Header />
    <form className="form-input">
      <Form label="Username"/>  
      <Form label="Kata Sandi" showImg LogoclassName="eye-password" />  
    </form>
    <Links text="Belum punya akun?" link="Daftar" navigate="/SignUp" showForgot />
    <Buttons text="Masuk" />
  </main>
  </div>
    </>
  )
}

export default SignIn
