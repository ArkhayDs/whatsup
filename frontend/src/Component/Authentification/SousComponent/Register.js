import '../authentification.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import useRegister from "../../../Hook/useRegister";
import Login from "./Login";
import {LoginAction} from "../../../Action/LoginAction";

export default function Register() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const [loding, setLoding] = useState(false)

    const register = useRegister()

    const submit = (e) => {
        e.preventDefault()
        setLoding(true)

        register(username,password,password2)
            .then(res => {
                switch (res.status) {
                    case 200:
                        dispatch(LoginAction(res.jwt))
                        navigate(from, {replace: true})
                        setLoding(false)
                        break
                    case 422:
                        setMessage(res.message)
                        setError(true)
                        setLoding(false)
                        break

                    default:
                        setLoding(false)
                        break
                }
            })

    }

    return (
        <>
            {error ? <span className="error_message">{message}</span> : ""}
            <form className="form_container">
                <div className="input_container">
                    <input type="text" id="name" className="input_input" placeholder=" "
                           onChange={(e) => {
                               setUsername(e.target.value)
                           }}/>
                    <label htmlFor="name" className="input_label">Nom</label>
                </div>
                <br/>
                <div className="input_container">
                    <input type="password" id="password" className="input_input" placeholder=" "
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/>
                    <label htmlFor="password" className="input_label">Mot de passe</label>
                </div>
                <br/>
                <div className="input_container">
                    <input type="password" id="password2" className="input_input" placeholder=" "
                           onChange={(e) => {
                               setPassword2(e.target.value)
                           }}/>
                    <label htmlFor="password2" className="input_label">Confirmer le mot de passe</label>
                </div>
                <br/>
                {loding ?
                    <div className="indeterminate-progress-bar">
                        <div className="indeterminate-progress-bar__progress"> </div>
                    </div>

                    :
                    <button className="buttonHover" type='submit' onClick={(e) => submit(e)}>
                        Inscription
                    </button>
                }

            </form>
        </>
    )
}