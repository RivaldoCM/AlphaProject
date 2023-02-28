import { collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextComponent } from "react-native";
import firebase from "../../api/databaseConnection";


export function Home({ navigation }){
    const [name, setName] = useState('');

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
        }).catch((error) => {
            
        })
    }

    return(
        <View>
            <TouchableOpacity onPress={() => logout() }>
                <Text>DESLOGAR</Text>
            </TouchableOpacity>
        </View>
    )
}