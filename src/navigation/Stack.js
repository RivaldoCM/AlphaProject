import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Tabs } from "./Tabs";

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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    )
}