import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {PrivateNavigator} from '@/navigation/PrivateNavigator';
import {useAuth} from '@/hooks/useAuth';
import {BottomMenu} from '@/components/layout/bottomMenu/BottomMenu';
import {useCheckAuth} from "../providers/auth/useCheckAuth";


const Navigation: FC = () => {
	const { user } = useAuth();
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined);
	const navRef = useNavigationContainerRef();


	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name);
		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name));
		return () => {
			navRef.removeListener('state', listener);
		};
	}, []);

	useCheckAuth(currentRoute)

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigator />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>

	);
};

export default Navigation;