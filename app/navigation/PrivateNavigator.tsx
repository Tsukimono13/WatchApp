import React, { FC } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/navigation/user.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { NotFound } from '@/components/screens/NotFound';
import Auth from '@/components/screens/auth/Auth';

export const PrivateNavigator: FC = () => {
	const { user } = useAuth();
	const Stack = createNativeStackNavigator<TypeRootStackParamList>();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}>
			{user ? routes.map(route => user.isAdmin || !route.isAdmin ? (
					<Stack.Screen
						key={route.name}
						{...route}
					/>
				) : <Stack.Screen
					key='NotFound'
					name='NotFound'
					component={NotFound}
				/>
			) : <Stack.Screen
				key='Auth'
				name='Auth'
				component={Auth}
			/>
			}
		</Stack.Navigator>
	);
};
