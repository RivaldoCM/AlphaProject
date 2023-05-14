import {React, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";

import {MainRoutes as Routes} from "./src/navigation/Stack";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App(){
    return(
        <AuthContextProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </AuthContextProvider>
    )
}