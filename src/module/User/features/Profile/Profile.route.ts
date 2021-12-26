import { lazy } from 'react';
import { IRouteProps } from 'src/module';

const profileRoute: IRouteProps = {
    path: '/profile',
    exact: true,
    component: lazy(() => import('./Profile')),
    name: 'Profile',
    to: '/profile',
    isPrivate: true,
};

export const route = profileRoute.path;

export default profileRoute;
