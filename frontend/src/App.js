import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Conversations from "./Component/Conversations/Conversations";
import Contacts from "./Component/Contacts/Contacts";
import Authentification from "./Component/Authentification/Authentification";
import Chat from "./Component/Conversations/Chat";
import {useDispatch} from "react-redux";
import useGetCookies from "./Hook/useGetCookies";
import {useEffect} from "react";
import {LoginAction} from "./Action/LoginAction";

export default function App() {
    const dispatch = useDispatch()
    const cookies = useGetCookies()


    useEffect(() => {
        if (Object.keys(cookies).includes('WhatsUpJWT')) {
            dispatch(LoginAction(cookies.WhatsUpJWT))
        }
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <header>
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
