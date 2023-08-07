import {IRoute} from './navigation.types';
import Auth from '@/components/screens/auth/Auth';
import {adminRoutes} from '@/navigation/admin.routes';
import Home from '@/components/screens/home/Home';
import Profile from '@/components/screens/profile/Profile';
import Favorites from '@/components/screens/favorites/Favorites';
import Trending from '@/components/screens/trending/Trending';
import Search from '@/components/screens/search/Search';

export const userRoutes: IRoute[] = [
    {
        name: "Home",
        component: Home
    },
    {
        name: 'Auth',
        component: Auth
    },
    {
        name: 'Profile',
        component: Profile
    },
    {
        name: 'Favorites',
        component: Favorites
    },
    {
        name: 'Trending',
        component: Trending
    },
    {
        name: 'Search',
        component: Search
    },
];

export const routes = [
    ...userRoutes, ...adminRoutes
]