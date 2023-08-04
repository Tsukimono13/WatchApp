import React, {FC} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {TypeRootStackParamList} from "@/navigation/navigation.types";
import {userRoutes} from "@/navigation/user.routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();
const Navigation: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#090909'
                    }
                }}>
                {userRoutes.map(route => (
                    <Stack.Screen key={route.name} {...route}/>
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;