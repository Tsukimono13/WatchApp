import { IRoute } from './navigation.types';
import Auth from '@/components/screens/auth/Auth';
import { adminRoutes } from '@/navigation/admin.routes';

export const userRoutes: IRoute[] = [
	/*{
			name: "Home",
			component: Home
	},*/
	{
		name: 'Auth',
		component: Auth
	},
];

export const routes = [
	...userRoutes, ...adminRoutes
]