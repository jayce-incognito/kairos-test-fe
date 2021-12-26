import { lazy } from 'react';
import { IRouteProps } from 'src/module';

const homeRoute: IRouteProps = {
    path: '/',
    exact: true,
    component: lazy(() => import('./Home')),
    name: 'Home',
    to: '/',
    isPrivate: true,
};

export const route = homeRoute.path;

export default homeRoute;
