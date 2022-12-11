import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./src/Component/Navigation/Navigation";
import {Provider} from "react-redux";
import {Store} from "./src/Store/Store";


export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </Provider>
    );
};

