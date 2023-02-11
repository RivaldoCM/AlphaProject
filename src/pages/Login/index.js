import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tabs");
    }

    return(
        <View>
            <TouchableOpacity onPress={entrar}>
                <Text>Clique para logar</Text>
            </TouchableOpacity>
        </View>
    )
}
