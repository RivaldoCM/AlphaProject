import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextComponent } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Settings(){


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