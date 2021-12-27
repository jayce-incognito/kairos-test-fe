import React from 'react';
import styled from 'styled-components';
import Extra from './Header.extra';

const Styled = styled.div`
    .home-header-hook {
        height: 112px;
        background: #ffd1e8;
    }
    .hook-title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        color: #181949;
        text-shadow: 0px 6px 9px rgba(0, 0, 0, 0.1);
    }
`;

const Hook = React.memo(() => {
    return (
        <div className="home-header-hook flex-center-horizontal">
            <p className="hook-title">
                You are now viewing an <b>IT Software</b> that has been verified by <b>over 1 million users.</b>
            </p>
        </div>
    );
});

const Header = () => {
    return (
        <Styled className="home-header-container">
            <Extra />
            <Hook />
        </Styled>
    );
};

export default React.memo(Header);
