import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Home } from "../screens/Home";
import { Record } from "../screens/Record";
import { Settings } from "../screens/Settings";
import { Lists } from "../screens/Lists";

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
    Listas: {
        name: 'list',
        library: 'Feather'
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
            <Tab.Screen name="Listas" component={Lists} />
            <Tab.Screen name="Mais" component={Settings} /> 
        </Tab.Navigator>
    )
}