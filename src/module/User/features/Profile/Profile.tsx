import React from 'react';
import { Link } from 'react-router-dom';
import homeRoute from 'src/module/Home/Home.route';
import styled from 'styled-components';

const Styled = styled.div``;

const ProfilePage = () => {
    return (
        <Styled>
            <Link to={homeRoute.path}>Link to home</Link>
        </Styled>
    );
};

export default React.memo(ProfilePage);
