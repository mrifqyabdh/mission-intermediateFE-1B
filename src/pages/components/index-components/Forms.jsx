import useTypeStore from "../../Store/setTypeStore";  

export const Form = (props) => {
    const setTypeText = useTypeStore((state) => state.setTypeText);
    const setTypePassword = useTypeStore((state) => state.setTypePassword);

    return (
        <div className="form-password">
            <label className="password" htmlFor="Password">
                {props.label}
            </label>
            <input
                className="input-password"
                type={props.type}
                placeholder={`Masukkan ${props.label}`}
            />
            {props.showImg & props.type === "password" ?
                (<img
                    className={props.LogoclassName}
                    src="./assets/eye-off.png"
                    alt="eye-logo"
                    onClick= {() => setTypeText() }
                />)
                : props.showImg & props.type === "text" ?
                    (<img
                        className={props.LogoclassName}
                        src="./assets/eye-on.png"
                        alt="eye-logo"
                        onClick= {() => setTypePassword() }
                    />)
                    : null}
        </div>
    );
};