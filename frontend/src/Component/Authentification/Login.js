import './authentification.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import useLogin from "../../Hook/useLogin";
import {LoginAction} from "../../Action/LoginAction";
import {useLocation, useNavigate} from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = useLogin()

    const submit = (e) => {
        e.preventDefault()
        login(username,password)
            .then(res => dispatch(LoginAction(res.jwt)))
            .then(() => navigate(from, {replace: true}))
    }

    return (
        <form className="form_container">
            <div className="input_container">
                <input type="text" id="name" className="input_input" placeholder=" "
                       onChange={(e) => {setUsername(e.target.value)}}/>
                <label htmlFor="name" className="input_label">Nom</label>
            </div>
            <br/>
            <div className="input_container">
                <input type="password" id="password" className="input_input" placeholder=" "
                       onChange={(e) => {setPassword(e.target.value)}}/>
                <label htmlFor="password" className="input_label">Mot de passe</label>
            </div>
            <br/>
            <button className="buttonHover"  type="submit" onClick={(e) => submit(e)}>
                Connexion
            </button>
        </form>
    )
}
