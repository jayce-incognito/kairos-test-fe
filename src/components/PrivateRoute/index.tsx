import React from 'react';
import { useCookies } from 'react-cookie';
import { USER_AUTHEN_COOKIES_KEY } from 'src/module/User';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuthenSelector } from 'src/module/User/features/Login';

const PrivateRoute = (props: RouteProps) => {
    const isAuthen = useSelector(isAuthenSelector);
    const [cookies] = useCookies([USER_AUTHEN_COOKIES_KEY]);
    console.log(cookies);
    if (!isAuthen || !cookies[USER_AUTHEN_COOKIES_KEY]) {
        return <Redirect to={{ pathname: '/login' }} />;
    }
    return <Route {...props} />;
};

export default React.memo(PrivateRoute);
