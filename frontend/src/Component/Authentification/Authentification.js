import React, {useState} from "react";
import './authentification.scss'
import Login from "./Login";
import Register from "./Register";


export default function Authentification() {
    const [login, setLogin] = useState(true)

    return (
        <>
            <nav className='nav-authentification'>
                <h1 onClick={() => setLogin( true)} className={login? 'active': ''}>Se connecter</h1>
                <h1 onClick={() => setLogin( false)} className={login? '': 'active'}>S'inscrire</h1>
            </nav>
            {login
                ? <Login/>
                : <Register/>
            }
        </>
    )
}