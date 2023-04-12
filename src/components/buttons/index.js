import React from "react";
import { Text } from "react-native";

import { LoginButton } from "./style"

export function LoginBtn({text, onPress}){
    return(
        <LoginButton onPress={onPress}>
            <Text style={{ color: '#fee7e7' }} >{text}</Text>
        </LoginButton>
    )
}