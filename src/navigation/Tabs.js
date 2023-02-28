import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from "../pages/Home";
import { Record } from "../pages/Record";

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Settings } from "../pages/Settings";

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home',
        library: 'Feather'
    },
    Registrar: {
        name: 'add-chart',
        library: 'MaterialIcons'
    },
    Mais: {
        name: 'more-horizontal',
        library: 'Feather'
    }
};

export function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={ ({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    const { name, library } = icons[route.name];
                    if(library == 'MaterialIcons'){
                        return <MaterialIcons name={name} color={color} size={size} />
                    }
                    return <Feather name={name} color={color} size={size} />
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Registrar" component={Record} />
            <Tab.Screen name="Mais" component={Settings} /> 
        </Tab.Navigator>
    )
}