import React, {useState} from "react";
import './authentification.scss'
import './authentification-dark.scss'
import Login from "./Login";
import Register from "./Register";
import {useSelector} from "react-redux";


export default function Authentification() {
    const [login, setLogin] = useState(true)
    const dark = useSelector(store => store.DarkModeReducer)

    return (
        <section className={dark ? "authentification-container authentification-container-dark" : "authentification-container"}>
            <nav className='nav-authentification'>
                <h1 onClick={() => setLogin( true)} className={login? 'active': ''}>Se connecter</h1>
                <h1 onClick={() => setLogin( false)} className={login? '': 'active'}>S'inscrire</h1>
            </nav>
            {login
                ? <Login/>
                : <Register/>
            }
        </section>
    )
}