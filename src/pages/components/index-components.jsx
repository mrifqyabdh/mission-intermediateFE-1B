import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="/assets/Logo.png" alt="logo-chill" />
            <h1>Masuk</h1>
            <p>Selemat datang kembali!</p>
        </div>
    );
};

export const FormUsername = () => {
    return (
        <>
            <label className="username" htmlFor="Username">
                Username
            </label>
            <input
                className="input-username"
                type="text"
                placeholder="Masukkan username"
            />
        </>
    );
};

export const FormPassword = (props) => {
    return (
        <div className="form-password">
            <label className="password" htmlFor="Password">
                {props.label}
            </label>
            <input
                className="input-password"
                type="password"
                placeholder="Masukkan kata sandi"
            />
            <img
                className={props.LogoclassName}
                src="/assets/eye-off.png"
                alt="eye-logo"
            />
        </div>
    );
};

export const Links = (props) => {
    return (
        <div className="links">
            <p>
                {props.text} <Link to={props.navigate}>{props.link}</Link>
            </p>

            {/* untuk Toggle Hide */}
            {props.showForgot && <a href="#">Lupa kata sandi</a>}
        </div>
    );
};

export const Buttons = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <button
                onClick={() => navigate("/Beranda")}
                className="button-submit"
                type="button"
            >
                {props.text}
            </button>
            <p className="atau">Atau</p>
            <button className="button-google" type="submit">
                <img src="/assets/logo-google.png" alt="google" />
                {props.text} dengan Google
            </button>
        </>
    );
};
