import {  } from 'react'
import { Header, FormUsername, FormPassword, Links, Buttons } from './components/index-components.jsx'

export const SignIn = () => {
  return (
    <>
  <div className="body-signin">
  <main className="container">
    <Header />
    <form className="form-input">
      <FormUsername />
      <FormPassword label="Kata Sandi" LogoclassName="eye-password" />  
    </form>
    <Links text="Belum punya akun?" link="Daftar" navigate="/SignUp" showForgot />
    <Buttons text="Masuk" />
  </main>
  </div>
    </>
  )
}

export const SignUp = () => {
  return (
    <>
  <div className="body-signup">
  <main className="container">
    <Header />
    <form className="form-input">
      <FormUsername />
      <FormPassword label="Kata Sandi" LogoclassName="eye-password"/>
      <FormPassword label="Konfirmasi Kata Sandi" LogoclassName="eye-password-again"/>
    </form>
    <Links text="Sudah punya akun?" link="Masuk" navigate="/"/>
    <Buttons text="Daftar"  />
  </main>
  </div>
    </>
  )
}