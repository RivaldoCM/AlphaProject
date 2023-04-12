import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextComponent } from "react-native";

export function Home({ navigation }){
    const [name, setName] = useState('');

    return(
        <View>
            <TouchableOpacity>
                <Text>DESLOGAR</Text>
            </TouchableOpacity>
        </View>
    )
}