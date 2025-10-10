
import { Header } from "./components/index-components/header.jsx";
import { Form } from "./components/index-components/Forms.jsx";
import { Links } from "./components/index-components/Links.jsx";
import { Buttons } from "./components/index-components/Buttons.jsx";

const SignUp = () =>  {
    return (
        <>
            <div className="body-signup">
                <main className="container">
                    <Header />
                    <form className="form-input">
                        <Form label="Username" />
                        <Form label="Kata Sandi" showImg LogoclassName="eye-password" />
                        <Form
                            label="Konfirmasi Kata Sandi"
                            showImg
                            LogoclassName="eye-password-again"
                        />
                    </form>
                    <Links text="Sudah punya akun?" link="Masuk" navigate="/" />
                    <Buttons text="Daftar" />
                </main>
            </div>
        </>
    );
}

export default SignUp
