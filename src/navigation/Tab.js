import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from "../pages/Home";
import { Record } from "../pages/Record";

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tabs = createBottomTabNavigator();

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

export function Tab(){
    return(
        <Tabs.Navigator
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
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Registrar" component={Record} /> 
        </Tabs.Navigator>
    )
}