import { Link } from "react-router-dom";

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