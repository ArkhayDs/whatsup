import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import Conversations from "./Component/Conversations/Conversations";
import Inscription from "./Component/Inscritpion/Inscription";
import Contacts from "./Component/Contacts/Contacts";

export default function App() {
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
                        <Route path='/inscription' element={<Inscription/>}/>
                        <Route path='/Conversations' element={
                            <NeedAuth>
                                <Conversations/>
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
