import './authentification.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import useRegister from "../../Hook/useRegister";
import Login from "./Login";
import {LoginAction} from "../../Action/LoginAction";

export default function Register() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState(false)
    const [status, setStatus] = useState(false)
    const [message, setMessage] = useState('')

    const register = useRegister()

    const submit = async (e) => {
        e.preventDefault()

        register(username,password,password2)
            .then(res => {
                setStatus(res.status)
                switch (status) {
                    case 200:
                        dispatch(LoginAction(res.jwt))
                        break
                    case 405:
                        setError(true)
                        break
                    default:
                        break
                }
            })
            .then(() => navigate(from, {replace: true}))

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
                <button className="buttonHover" type='submit' onClick={(e) => submit(e)}>
                    Inscription
                </button>
            </form>
        </>
    )
}