import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "./style";

export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <Container>
            <TouchableOpacity onPress={entrar}>
                <Text>Clique para logar</Text>
            </TouchableOpacity>
        </Container>
    )
}
