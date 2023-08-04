import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateNavigator } from '@/navigation/PrivateNavigator';


const Navigation: FC = () => {
    return (
        <NavigationContainer>
           <PrivateNavigator/>
        </NavigationContainer>
    );
};

export default Navigation;