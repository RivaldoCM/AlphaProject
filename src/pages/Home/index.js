import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text,  } from "react-native";
import { Container } from "./style";


export function Home(){
    return(
        <Container>
            <Text>Home</Text>
            <TouchableOpacity>
                <Text>MUDA COR</Text>
            </TouchableOpacity>
        </Container>
    )
}