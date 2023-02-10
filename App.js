import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {MainRoutes as Routes} from "./src/navigation/Stack"

export default function App(){
    return(
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}