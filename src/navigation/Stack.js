import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';


import { Login } from "../screens/Login";
import { Tabs } from "./Tabs";

const Stack = createStackNavigator();

export function MainRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />

        </Stack.Navigator>
    )
}