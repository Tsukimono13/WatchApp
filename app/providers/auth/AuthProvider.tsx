import React, { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';
import { IContext, TypeUserState } from './auth-provider.interface';
import * as SplashScreen from 'expo-splash-screen';
import { getAccessToken, getUserFromStorage } from '../../services/auth/auth.helper';

export const AuthContext = createContext({} as IContext);
let ignore = SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	useEffect(() => {
		let isMounted = true;

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken();
				if (accessToken) {
					const user = await getUserFromStorage();
					if (isMounted) setUser(user);
				}
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		let ignore = checkAccessToken();
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

