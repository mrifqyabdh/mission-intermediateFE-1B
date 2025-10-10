export const Form = (props) => {
    return (
        <div className="form-password">
            <label className="password" htmlFor="Password">
                {props.label}
            </label>
            <input
                className="input-password"
                type="password"
                placeholder={`Masukkan ${props.label}`}
            />
            {props.showImg &&
                <img
                    className={props.LogoclassName}
                    src="./assets/eye-off.png"
                    alt="eye-logo"
                />}
        </div>
    );
};