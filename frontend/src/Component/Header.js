import './header.scss'
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <nav className='nav-header'>
            <NavLink to="/"><h1>WatsUp</h1></NavLink>
            <ul>
                <li><NavLink to="/Conversations">Conversations</NavLink></li>
                <li><NavLink to="/">Contacts</NavLink></li>
            </ul>
        </nav>
    )
}