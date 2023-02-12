import React from "react";
import { Text, TouchableOpacity, TextInput } from "react-native";

import { 
    BoxForm, 
    BoxImage, 
    BoxVoid, 
    Container, 
    Image } from "./style";

import logo from '../../images/logo.png'

export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <Container>
            <BoxImage>
                <Image source={logo} />
            </BoxImage>
            <BoxVoid>
                <BoxForm>
                    <TextInput placeholder="Email:"/>
                    <TextInput placeholder="Senha:"/>
                    <TouchableOpacity onPress={entrar}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </BoxForm>

            </BoxVoid>

        </Container>
    )
}
