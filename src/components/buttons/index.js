import React from "react";
import { Text } from "react-native";

import { LoginButton } from "./style"

export function LoginBtn(props){
    return(
        <LoginButton>
            <Text style={{ color: '#fee7e7' }} >{props.text}</Text>
        </LoginButton>
    )
}