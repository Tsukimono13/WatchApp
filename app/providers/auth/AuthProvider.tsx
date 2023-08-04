import React, { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';
import { IContext, TypeUserState } from './auth-provider.interface';
import * as SplashScreen from 'expo-splash-screen';

export const AuthContext = createContext({} as IContext);
let ignore = SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	useEffect(() => {
		let mounted = true;

		const checkAccessToken = async () => {
			try {

			} catch (e) {

			} finally {
				await SplashScreen.hideAsync();
			}
		};

		let ignore = checkAccessToken();
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

