import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Login({ navigation }){

    const entrar = () => {
        navigation.navigate("Tab");
    }

    return(
        <View>
            <Text>Loginnnnnnnnnnnnnnnnnn</Text>
            <TouchableOpacity onPress={entrar}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
