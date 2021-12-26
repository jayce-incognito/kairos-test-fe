import { lazy } from 'react';
import { IRouteProps } from 'src/module';

const loginRoute: IRouteProps = {
    path: '/login',
    exact: true,
    component: lazy(() => import('./Login')),
    name: 'Login',
    to: '/login',
};

export const route = loginRoute.path;

export default loginRoute;
