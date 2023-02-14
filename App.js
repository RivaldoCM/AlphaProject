import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components";

import {MainRoutes as Routes} from "./src/navigation/Stack"

import themes from "./src/theme";

export default function App(){
    const deviceTheme = useColorScheme();

    const theme = themes[deviceTheme] || theme.dark

    return(
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>

    )
}