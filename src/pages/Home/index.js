import { collection, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import firebase from "../../api/databaseConnection";


export function Home(){
    const [name, setName] = useState('');

    useEffect(() => {
        const q = query(collection(firebase, "users"));
        onSnapshot(q, (querySnapshot) => {
            setName(querySnapshot.docs.map( doc =>({
                data: doc.data()
            })))
        })
    }, []);
    
    return(
        <View>
            <Text>{name[0]?.data?.senha}</Text>
        </View>
    )
}