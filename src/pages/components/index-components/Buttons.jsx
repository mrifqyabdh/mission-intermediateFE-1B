import { useNavigate } from "react-router-dom";

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