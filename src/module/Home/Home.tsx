import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profileRoute from '../User/features/Profile/Profile.route';

declare global {
    interface Window {
        ReactNativeWebView: any;
    }
}

const Styled = styled.div``;

const Home = () => {
    return (
        <Styled>
            <p>This is home page</p>
            <Link to={profileRoute.path}>Link to profile</Link>
        </Styled>
    );
};

export default React.memo(Home);
