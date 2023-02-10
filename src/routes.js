import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Home } from "./pages/Home";
import { Record } from "./pages/Record";
import { Login } from "./pages/Login";

import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home',
        library: 'Feather'
    },
    Registrar: {
        name: 'add-chart',
        library: 'MaterialIcons'
    }
};



const Stack = createStackNavigator();

export function MainRoutes(){
    return(
        <Stack.Navigator
            screenOptions={ ({ route,  }) => ({
                headerShown: false,
                StackBarIcon: ({ color, size }) => {
                    const { name, library } = icons[route.name];
                    if(library == 'MaterialIcons'){
                        return <MaterialIcons name={name} color={color} size={size} />
                    }
                    return <Feather name={name} color={color} size={size} />
                }
            })}
        >
            <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="Registrar" component={Record} /> 
        </Stack.Navigator>
    )
}