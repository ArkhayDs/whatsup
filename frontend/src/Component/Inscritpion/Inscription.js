import React, {useState} from "react";
import './inscription.scss'
import Login from "./Login";
import Register from "./Register";


export default function Inscription() {
    const [login, setLogin] = useState(true)

    return (
        <>
            <nav className='nav-inscription'>
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