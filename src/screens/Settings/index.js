import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextComponent } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../hooks/useAuth";

export function Settings(){


    const { user, setUser }= useAuth();

    console.log(user)

    function logout(){
        const user = AsyncStorage.removeItem('user');
    }


    return(
        <View>
            <TouchableOpacity onPress={logout}>
                <Text>deslogar</Text>
            </TouchableOpacity>
        </View>
    )
}