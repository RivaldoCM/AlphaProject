import React from "react";
import { Text } from "react-native";

import { BoxError } from "./style"

import Feather from 'react-native-vector-icons/Feather';

export function ErrorLogin(props){
    return(
        <BoxError>
            <Feather name="alert-circle" size={25} />
            <Text style={{ color: '#363636' }} >{props.text}</Text>
        </BoxError>
    )
}