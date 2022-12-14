import './Component/style.scss'
import './Component/style-dark.scss'

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Contacts from "./Component/Contacts/Contacts";
import Authentification from "./Component/Authentification/Authentification";
import Chat from "./Component/Chat/Chat";
import {useDispatch, useSelector} from "react-redux";
import useGetCookies from "./Hook/useGetCookies";
import {useEffect} from "react";
import {LoginAction} from "./Action/LoginAction";
import Qrcode from "./Component/QrCode/Qrcode";

export default function App() {
    const dark = useSelector(store => store.DarkModeReducer)
    const dispatch = useDispatch()
    const cookies = useGetCookies()
    const currentUser = useSelector(store => store.SigninReducer)

    useEffect(() => {
        if (Object.keys(cookies).includes('WhatsUpJWT')) {
            dispatch(LoginAction(cookies.WhatsUpJWT))
        }
    }, [currentUser])

    return (
        <BrowserRouter>
            <div className={dark ? "App App-dark" : "App"}>
                <header className="header-prince">
                    <Header/>
                </header>
                <main>
                    <Routes>
                        <Route path={'/'} element={
                            <NeedAuth>
                                <Contacts/>
                            </NeedAuth>
                        }/>
                        <Route path='/authentification' element={<Authentification/>}/>
                        <Route path='/conversations' element={
                            <NeedAuth>
                                <Chat/>
                            </NeedAuth>
                        }/>
                        <Route path='/authentification/QrCode' element={
                            <NeedAuth>
                                <Qrcode />
                            </NeedAuth>
                        }/>
                    </Routes>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </BrowserRouter>
    );
}
