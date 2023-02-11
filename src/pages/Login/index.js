import React from "react";
import { Text, TouchableOpacity, TextInput } from "react-native";

import { Absolute, Container, Div, Divv } from "./style";

export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <Container>
            <TextInput placeholder="Email:"/>
            <TextInput placeholder="Senha:"/>
            <TouchableOpacity onPress={entrar}>
                <Text>Login</Text>
            </TouchableOpacity>
        </Container>
    )
}
