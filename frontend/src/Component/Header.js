import './header.scss'
import './header-dark.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {DarkModeAction} from "../Action/DrakModeAction";
import {RiMoonFill, RiSunFill} from "react-icons/ri";

export default function Header() {
    const dispatch = useDispatch();
    let dark = useSelector(store => store.DarkModeReducer)

    const switchDarckMode = () => {
        dark = !dark
        if (dark) {
            dispatch(DarkModeAction('Dark', dark))
        } else {
            dispatch(DarkModeAction('Light', dark))
        }
    }

    return (
        <nav className={dark ? 'nav-header nav-header-dark' : 'nav-header'}>
            <NavLink to="/"><h1>WhatsUp</h1></NavLink>
            <ul>
                <li><NavLink to="/Conversations">Conversations</NavLink></li>
                <li><NavLink to="/">Contacts</NavLink></li>
            </ul>
            <button onClick={switchDarckMode}>{dark ? <RiMoonFill /> : <RiSunFill /> }</button>
        </nav>
    )
}