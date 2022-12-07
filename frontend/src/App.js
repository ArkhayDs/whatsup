import './Component/style.scss'
import './Component/style-dark.scss'

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Conversations from "./Component/Conversations/Conversations";
import Contacts from "./Component/Contacts/Contacts";
import Authentification from "./Component/Authentification/Authentification";
import Chat from "./Component/Conversations/Chat";
import {useDispatch, useSelector} from "react-redux";
import useGetCookies from "./Hook/useGetCookies";
import {useEffect} from "react";
import {LoginAction} from "./Action/LoginAction";

export default function App() {
    const dark = useSelector(store => store.DarkModeReducer)
    const dispatch = useDispatch()
    const cookies = useGetCookies()


    useEffect(() => {
        if (Object.keys(cookies).includes('WhatsUpJWT')) {
            dispatch(LoginAction(cookies.WhatsUpJWT))
        }
        window.onload = function() {
            const url = new URL('http://localhost:1234/.well-known/mercure');
            url.searchParams.append('topic', 'https://example.com/my-private-topic');

            const eventSource = new EventSource(url);

            eventSource.onmessage = e => console.log(JSON.parse(e.data));
        }
    }, [])

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
                        <Route path='/Conversations' element={
                            <NeedAuth>
                                <Conversations/>
                            </NeedAuth>
                        }/>
                        <Route path='/Conversations/id' element={
                            <NeedAuth>
                                <Chat/>
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
