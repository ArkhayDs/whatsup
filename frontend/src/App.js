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
import {useSelector} from "react-redux";

export default function App() {
    const dark = useSelector(store => store.DarkModeReducer)

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
