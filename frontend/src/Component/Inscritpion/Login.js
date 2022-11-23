import './inscription.scss'
import {useState} from "react";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = async(e) => {
        e.preventDefault()
        const data = {
            usernameData: username,
            passwordData: password
        }
        console.log(data)
        // await fetch("http://localhost:5555/createUser.php", {
        //     // crossDomain: true,
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': `Basic ${btoa(`${data.usernameData}:${data.passwordData}`)}`
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => response.json())
        //     .then(responseJSON => console.log(responseJSON))
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
